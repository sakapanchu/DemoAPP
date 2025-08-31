import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, Bell } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-3 px-2 sm:px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.74L18.18 22 12 18.56 5.82 22 7 14.01l-5-4.74 6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight hidden sm:inline">DemoApp</span>
        </Link>

        <div className="flex-1 max-w-xl hidden sm:block">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search" className="pl-9" aria-label="Search" />
          </div>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" aria-label="Help" className="px-2 sm:px-3" onClick={() => console.log("help")}> 
            <HelpCircle className="h-5 w-5" />
            <span className="hidden sm:inline">Help</span>
          </Button>
          <Button variant="ghost" aria-label="Notifications" className="px-2 sm:px-3" onClick={() => console.log("notifications")}> 
            <Bell className="h-5 w-5" />
            <span className="hidden sm:inline">Notifications</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
