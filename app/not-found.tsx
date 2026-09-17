import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <section className="container callout">
        <p className="eyebrow">404</p>
        <h1>That page is outside the current operating picture.</h1>
        <p>Return to the AGG homepage or choose a primary engagement path.</p>
        <Link className="button button--primary" href="/">
          <ArrowRight size={18} aria-hidden="true" />
          Return home
        </Link>
      </section>
    </main>
  );
}
