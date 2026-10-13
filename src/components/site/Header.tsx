import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/config/site";
import logo from "@/assets/logo-md.png";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/progetti", label: "Progetti" },
  { to: "/chi-sono", label: "Chi sono" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <a href="#contenuto" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
        Vai al contenuto
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-semibold text-foreground" onClick={() => setOpen(false)}>
          <img src={logo} alt="" width={49} height={30} className="h-[30px] w-auto" />
          {site.name}
        </Link>
        <nav aria-label="Principale" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((i) => (
              <li key={i.to}>
                <Link
                  to={i.to}
                  activeOptions={{ exact: i.to === "/" }}
                  className="rounded-md px-3 py-2 text-[0.95rem] text-muted-foreground hover:text-foreground data-[status=active]:font-semibold data-[status=active]:text-foreground"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contatti"
            className="hidden rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            Parliamo del tuo progetto
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md md:hidden"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-t md:hidden">
          <ul className="container-page flex flex-col py-2">
            {navItems.map((i) => (
              <li key={i.to}>
                <Link
                  to={i.to}
                  activeOptions={{ exact: i.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base data-[status=active]:font-semibold"
                >
                  {i.label}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <Link
                to="/contatti"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-primary px-4 py-3 text-center font-semibold text-primary-foreground"
              >
                Parliamo del tuo progetto
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
