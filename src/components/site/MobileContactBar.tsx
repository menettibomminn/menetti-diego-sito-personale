import { Link, useLocation } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";

export function MobileContactBar() {
  const { pathname } = useLocation();
  if (pathname.startsWith("/contatti")) return null;
  return (
    <>
    <div aria-hidden="true" className="h-[4.5rem] md:hidden" />
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={`tel:${site.phone.replace(/\s/g, "")}`}
          aria-label="Chiama"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border text-primary"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivimi su WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border text-primary"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <Link
          to="/contatti"
          className="flex h-12 flex-1 items-center justify-center rounded-md bg-accent font-semibold text-accent-foreground"
        >
          Contattami
        </Link>
      </div>
    </div>
    </>
  );
}
