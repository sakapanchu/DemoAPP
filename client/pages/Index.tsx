import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Gauge, Layers, Rocket, Cog } from "lucide-react";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-100px,hsl(var(--primary)/0.18),transparent_60%)]" />
        <div className="container py-20 md:py-28 grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-accent/30 text-accent-foreground px-3 py-1 text-xs font-semibold">Modern • Fast • Beautiful</span>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight">
              Build polished apps, fast.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              NovaForge is a production‑ready React + Express starter. Ship pixel‑perfect experiences with strong defaults, delightful DX, and zero cruft.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/pricing">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link to="/features">
                <Button size="lg" variant="outline">Explore features</Button>
              </Link>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">No setup headaches. TypeScript, Tailwind, routing, API and tests included.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl rounded-3xl" />
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
              <img src="/placeholder.svg" alt="Product preview" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Everything you need to launch</h2>
            <p className="mt-2 text-muted-foreground">Carefully curated tools and components so you can focus on your product, not boilerplate.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Feature icon={<Sparkles className="h-5 w-5" />} title="Pixel-perfect UI" desc="Prebuilt components, sensible tokens, and dark mode ready." />
            <Feature icon={<ShieldCheck className="h-5 w-5" />} title="Type-safe APIs" desc="Shared types across client and server for fewer runtime bugs." />
            <Feature icon={<Gauge className="h-5 w-5" />} title="Blazing fast" desc="Vite + SWC for instant feedback and optimized builds." />
            <Feature icon={<Layers className="h-5 w-5" />} title="Structured" desc="Clean routing, layouts, and an Express API out of the box." />
            <Feature icon={<Rocket className="h-5 w-5" />} title="Deploy anywhere" desc="Works great on Netlify or Vercel with one click." />
            <Feature icon={<Cog className="h-5 w-5" />} title="Customizable" desc="Tailor the theme and components to your brand in minutes." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="rounded-2xl border bg-gradient-to-br from-primary/15 via-background to-accent/10 p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to launch your next idea?</h3>
            <p className="mt-2 text-muted-foreground">Start building with NovaForge today. You'll be live in hours, not weeks.</p>
            <div className="mt-6 flex justify-center gap-3">
              <Link to="/pricing">
                <Button size="lg">Start now</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary">Talk to us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-6 bg-card">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
