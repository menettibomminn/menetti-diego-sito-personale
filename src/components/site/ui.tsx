import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { ServiceSlug } from "@/config/site";

export function PrimaryLink({ servizio, children }: { servizio?: ServiceSlug; children: ReactNode }) {
  return (
    <Link
      to="/contatti"
      search={servizio ? { servizio } : {}}
      className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
    >
      {children}
      <ArrowRight className="size-4" aria-hidden />
    </Link>
  );
}

export function CtaBand({ title, text, cta = "Raccontami il tuo progetto" }: { title: string; text: string; cta?: string }) {
  return (
    <section className="bg-accent">
      <div className="container-page flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-3 text-muted-foreground">{text}</p>
        </div>
        <div className="shrink-0">
          <PrimaryLink>{cta}</PrimaryLink>
        </div>
      </div>
    </section>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <section className="border-b">
      <div className="container-page py-14 md:py-20">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}
