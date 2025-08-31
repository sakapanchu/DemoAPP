import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.74L18.18 22 12 18.56 5.82 22 7 14.01l-5-4.74 6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
          </span>
          <span className="font-semibold">DemoApp</span>
        </div>
        <p className="text-muted-foreground">© {new Date().getFullYear()} DemoApp. For demonstration purposes.</p>
        <div className="flex items-center gap-6 text-muted-foreground">
          <Link to="/terms" className="hover:text-foreground">Terms</Link>
          <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
