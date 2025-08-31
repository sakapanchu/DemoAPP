import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <section className="py-24">
      <div className="container text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">404</h1>
        <p className="mt-2 text-muted-foreground">We couldn't find that page.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/">
            <Button>Back to home</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Contact support</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
