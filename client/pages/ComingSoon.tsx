import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  const location = useLocation();
  const name = location.pathname.replace(/\//g, " ").trim() || "Page";
  return (
    <section className="py-24">
      <div className="container text-center">
        <div className="mx-auto max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-accent/50 text-accent-foreground px-3 py-1 text-xs font-medium">In progress</span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">{name.charAt(0).toUpperCase() + name.slice(1)} coming soon</h1>
          <p className="mt-3 text-muted-foreground">
            This section isn't ready yet. Tell us what you want here and we'll build it next.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link to="/">
              <Button variant="secondary">Back home</Button>
            </Link>
            <Link to="/contact">
              <Button>Contact us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
