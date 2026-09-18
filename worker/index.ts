/** Cloudflare Worker entry point for the Apex Governance Group website. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

type AssetFetcher = {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
};

interface Env {
  ASSETS: AssetFetcher;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const SECURITY_HEADERS = [
  [
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self' https://checkout.stripe.com",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self' 'unsafe-inline'",
      "connect-src 'self' https://api.stripe.com",
      "frame-src https://checkout.stripe.com https://js.stripe.com",
      "upgrade-insecure-requests",
    ].join("; "),
  ],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  ["Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload"],
  ["X-Content-Type-Options", "nosniff"],
  ["X-DNS-Prefetch-Control", "on"],
  ["X-Frame-Options", "DENY"],
  [
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), browsing-topics=()",
  ],
] as const;

function hardenResponse(response: Response, url: URL): Response {
  const nextResponse = new Response(response.body, response);

  for (const [key, value] of SECURITY_HEADERS) {
    nextResponse.headers.set(key, value);
  }

  if (url.pathname.startsWith("/assets/")) {
    nextResponse.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable",
    );
  } else if (url.pathname.startsWith("/brand/")) {
    nextResponse.headers.set(
      "Cache-Control",
      "public, max-age=86400, stale-while-revalidate=604800",
    );
  }

  return nextResponse;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "apexgov.ai") {
      url.hostname = "www.apexgov.ai";
      return Response.redirect(url.toString(), 308);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      const response = await handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);

      return hardenResponse(response, url);
    }

    return hardenResponse(await handler.fetch(request, env, ctx), url);
  },
};

export default worker;
