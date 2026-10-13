import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";
import { navItems } from "./Header";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-2 text-sm opacity-80">{site.role}</p>
          <p className="mt-2 text-sm opacity-80">{site.area}</p>
        </div>
        <nav aria-label="Navigazione footer">
          <p className="text-sm font-semibold">Pagine</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="opacity-80 hover:opacity-100 hover:underline">{i.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold">Contatti</p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.email && <li><a className="opacity-80 hover:underline" href={`mailto:${site.email}`}>{site.email}</a></li>}
            {site.pec && <li><a className="opacity-80 hover:underline" href={`mailto:${site.pec}`}>PEC: {site.pec}</a></li>}
            {site.phone && <li><a className="opacity-80 hover:underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>}
            {site.whatsapp && <li><a className="opacity-80 hover:underline" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">Scrivimi su WhatsApp</a></li>}
            <li><Link to="/contatti" className="opacity-80 hover:underline">Modulo di contatto</Link></li>
            <li><Link to="/privacy" className="opacity-80 hover:underline">Privacy policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/15">
        <p className="container-page py-5 text-xs opacity-70">
          © {new Date().getFullYear()} {site.name}{site.vatNumber && ` · P. IVA ${site.vatNumber}`}{site.address && ` · ${site.address}`}
        </p>
      </div>
    </footer>
  );
}
