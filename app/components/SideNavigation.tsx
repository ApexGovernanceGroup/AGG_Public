"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideNavItems } from "../site-data";

export function SideNavigation() {
  const pathname = usePathname();

  return (
    <aside className="site-side-nav" aria-label="Floating primary navigation">
      <div className="site-side-nav__inner">
        <p className="site-side-nav__label">Navigate</p>
        <nav className="site-side-nav__links">
          {sideNavItems.map((item, index) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "is-active" : undefined}
                href={item.href}
                key={item.href}
              >
                {Icon ? (
                  <Icon size={17} aria-hidden="true" />
                ) : (
                  <span className="site-side-nav__index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
