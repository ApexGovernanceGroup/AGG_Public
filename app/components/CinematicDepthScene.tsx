"use client";

import { useEffect, useRef } from "react";
import type { Object3D } from "three";

type ThreeModule = typeof import("three");

const GRID_SEGMENTS = 72;
const GRID_LINES = 15;
const PARTICLE_COUNT = 260;

function seededRandom(seed: number) {
  let value = seed;

  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}

function waveLine(
  THREE: ThreeModule,
  axis: "x" | "z",
  index: number,
  color: number,
  opacity: number,
) {
  const positions: number[] = [];
  const offset = index - Math.floor(GRID_LINES / 2);
  const spread = 1.05;

  for (let segment = 0; segment < GRID_SEGMENTS; segment += 1) {
    const progress = segment / (GRID_SEGMENTS - 1);
    const run = (progress - 0.5) * 18;
    const cross = offset * spread;
    const wave =
      Math.sin(progress * Math.PI * 2.8 + index * 0.72) * 0.2 +
      Math.cos(progress * Math.PI * 1.55 + index * 0.3) * 0.1;

    positions.push(axis === "x" ? run : cross, wave, axis === "x" ? cross : run);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.LineBasicMaterial({
    color,
    depthWrite: false,
    opacity,
    transparent: true,
  });

  return new THREE.Line(geometry, material);
}

function createParticleField(THREE: ThreeModule) {
  const random = seededRandom(3217);
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  const colors = new Float32Array(PARTICLE_COUNT * 3);
  const bronze = new THREE.Color(0x88623c);
  const navy = new THREE.Color(0x172c3f);
  const platinum = new THREE.Color(0xc3c2bd);

  for (let index = 0; index < PARTICLE_COUNT; index += 1) {
    const base = index * 3;
    positions[base] = (random() - 0.5) * 20;
    positions[base + 1] = (random() - 0.46) * 4.4;
    positions[base + 2] = (random() - 0.5) * 12;

    const color = index % 5 === 0 ? bronze : index % 3 === 0 ? navy : platinum;
    colors[base] = color.r;
    colors[base + 1] = color.g;
    colors[base + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    depthWrite: false,
    opacity: 0.68,
    size: 0.055,
    transparent: true,
    vertexColors: true,
  });

  return new THREE.Points(geometry, material);
}

function disposeObject(object: Object3D) {
  const disposable = object as Object3D & {
    geometry?: { dispose: () => void };
    material?: { dispose: () => void } | Array<{ dispose: () => void }>;
  };

  disposable.geometry?.dispose();

  if (Array.isArray(disposable.material)) {
    disposable.material.forEach((material) => material.dispose());
  } else {
    disposable.material?.dispose();
  }
}

export function CinematicDepthScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let cleanupScene: (() => void) | undefined;

    const loadScene = async () => {
      const THREE = await import("three");
      const mount = mountRef.current;
      if (disposed || !mount) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0xf4f1ea, 0.045);

      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 70);
      camera.position.set(0, 3.5, 13);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.setAttribute("aria-hidden", "true");
      mount.appendChild(renderer.domElement);

      const mapPlane = new THREE.Group();
      mapPlane.rotation.x = -0.72;
      mapPlane.rotation.z = -0.08;
      mapPlane.position.set(0, -1.6, -1.8);
      scene.add(mapPlane);

      for (let index = 0; index < GRID_LINES; index += 1) {
        mapPlane.add(
          waveLine(
            THREE,
            "x",
            index,
            index % 4 === 0 ? 0x88623c : 0x172c3f,
            index % 4 === 0 ? 0.34 : 0.16,
          ),
        );
        mapPlane.add(
          waveLine(
            THREE,
            "z",
            index,
            index % 3 === 0 ? 0x793735 : 0x3e4346,
            index % 3 === 0 ? 0.24 : 0.14,
          ),
        );
      }

      const particles = createParticleField(THREE);
      particles.position.set(0, 0.25, -1);
      scene.add(particles);

      const prismGeometry = new THREE.IcosahedronGeometry(1.2, 1);
      const prismMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x88623c,
        depthWrite: false,
        emissive: 0x172c3f,
        emissiveIntensity: 0.06,
        metalness: 0.45,
        opacity: 0.3,
        roughness: 0.42,
        transparent: true,
      });
      const prism = new THREE.Mesh(prismGeometry, prismMaterial);
      prism.position.set(4.6, -0.15, -1.4);
      prism.rotation.set(0.2, 0.7, 0.12);
      scene.add(prism);

      const prismWire = new THREE.LineSegments(
        new THREE.WireframeGeometry(prismGeometry),
        new THREE.LineBasicMaterial({
          color: 0x6b4d2f,
          depthWrite: false,
          opacity: 0.34,
          transparent: true,
        }),
      );
      prism.add(prismWire);

      scene.add(new THREE.AmbientLight(0xf4f1ea, 1.7));

      const bronzeLight = new THREE.PointLight(0x88623c, 16, 26);
      bronzeLight.position.set(-5, 2.2, 5);
      scene.add(bronzeLight);

      const blueLight = new THREE.PointLight(0x172c3f, 10, 24);
      blueLight.position.set(6, 1.2, 4);
      scene.add(blueLight);

      let width = 0;
      let height = 0;
      let pointerX = 0;
      let pointerY = 0;
      let animationFrame: number | null = null;
      let motionReduced = reduceMotion.matches;

      const resize = () => {
        width = mount.clientWidth || window.innerWidth;
        height = mount.clientHeight || window.innerHeight;
        camera.aspect = width / Math.max(height, 1);
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };

      const renderScene = (time = 0) => {
        const seconds = time * 0.001;
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const scrollProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
        const drift = motionReduced ? 0 : Math.sin(seconds * 0.18) * 0.035;

        mapPlane.rotation.z = -0.08 + drift + pointerX * 0.035;
        mapPlane.position.y = -1.6 + scrollProgress * 0.9 + pointerY * 0.28;
        particles.rotation.y = motionReduced ? 0.12 : seconds * 0.018 + pointerX * 0.06;
        particles.position.y = 0.25 - scrollProgress * 0.42;
        prism.rotation.x = 0.2 + (motionReduced ? 0 : seconds * 0.08);
        prism.rotation.y = 0.7 + (motionReduced ? 0 : seconds * 0.11) + pointerX * 0.12;
        bronzeLight.position.x = -5 + pointerX * 2.2;
        blueLight.position.y = 1.2 + pointerY * 1.4;

        renderer.render(scene, camera);
      };

      const animate = (time: number) => {
        renderScene(time);
        if (!motionReduced) {
          animationFrame = window.requestAnimationFrame(animate);
        }
      };

      const start = () => {
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
          animationFrame = null;
        }

        if (motionReduced) {
          renderScene(0);
        } else {
          animationFrame = window.requestAnimationFrame(animate);
        }
      };

      const onPointerMove = (event: PointerEvent) => {
        pointerX = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
        pointerY = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
      };

      const onReduceMotionChange = () => {
        motionReduced = reduceMotion.matches;
        start();
      };

      resize();
      start();

      window.addEventListener("resize", resize);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      reduceMotion.addEventListener("change", onReduceMotionChange);

      cleanupScene = () => {
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", onPointerMove);
        reduceMotion.removeEventListener("change", onReduceMotionChange);
        scene.traverse(disposeObject);
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    void loadScene().catch(() => {
      cleanupScene = undefined;
    });

    return () => {
      disposed = true;
      cleanupScene?.();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="cinematic-depth-stage"
      aria-hidden="true"
      data-cinematic-depth="webgl-operating-map"
    />
  );
}
