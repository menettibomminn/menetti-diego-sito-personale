import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { serviceOptions, site, type ServiceSlug } from "@/config/site";
import { PageIntro } from "@/components/site/ui";
import { contactSchema, submitContact } from "@/lib/contact.functions";

const searchSchema = z.object({
  servizio: z.enum(["non-so", "siti-web", "automazione", "software", "consulenza"]).optional().catch(undefined),
});

export const Route = createFileRoute("/contatti")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contatti — Raccontami cosa vuoi migliorare | Diego Menetti" },
      { name: "description", content: "Descrivi la tua necessità con parole tue: non serve sapere già quale servizio scegliere. Bologna, Modena e da remoto." },
      { property: "og:title", content: "Contatti — Diego Menetti" },
      { property: "og:description", content: "Raccontami cosa vuoi migliorare nella tua attività." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: Contatti,
});

type Errors = Partial<Record<string, string>>;

const inputCls = "mt-1.5 block w-full rounded-md border border-input bg-card px-3 py-2.5 text-base placeholder:text-muted-foreground aria-[invalid=true]:border-destructive";

function Contatti() {
  const { servizio } = Route.useSearch();
  const send = useServerFn(submitContact);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const hasDirect = Boolean(site.email || site.phone);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      service: String(fd.get("service") ?? "non-so") as ServiceSlug,
      message: String(fd.get("message") ?? ""),
      contactPreference: hasDirect ? (String(fd.get("contactPreference") ?? "") as "email" | "telefono" | "") : undefined,
      privacy: fd.get("privacy") === "on",
      website: String(fd.get("website") ?? ""),
    };
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] ??= i.message;
      setErrors(errs);
      const first = Object.keys(errs)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      await send({ data: parsed.data });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const err = (k: string) =>
    errors[k] ? <p id={`e-${k}`} className="mt-1 text-sm text-destructive">{errors[k]}</p> : null;
  const a11y = (k: string) => ({ id: `f-${k}`, "aria-invalid": Boolean(errors[k]), "aria-describedby": errors[k] ? `e-${k}` : undefined });

  return (
    <>
      <PageIntro eyebrow="Contatti" title="Raccontami cosa vuoi migliorare">
        Non è necessario sapere già quale servizio scegliere. Descrivi la situazione con parole tue: al resto penso io.
      </PageIntro>
      <section className="container-page grid gap-12 py-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          {status === "sent" ? (
            <div role="status" className="rounded-xl border bg-card p-8">
              <CheckCircle2 className="size-8 text-primary" aria-hidden />
              <h2 className="mt-3 text-2xl font-semibold">Messaggio ricevuto, grazie.</h2>
              <p className="mt-2 text-muted-foreground">Leggerò la tua richiesta e ti risponderò all'indirizzo email che hai indicato.</p>
              <Link to="/" className="mt-6 inline-flex min-h-11 items-center font-semibold text-primary hover:underline">Torna alla home</Link>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="font-medium">Nome <span aria-hidden>*</span></label>
                  <input name="name" autoComplete="name" required className={inputCls} {...a11y("name")} />
                  {err("name")}
                </div>
                <div>
                  <label htmlFor="f-company" className="font-medium">Azienda <span className="font-normal text-muted-foreground">(facoltativa)</span></label>
                  <input name="company" autoComplete="organization" className={inputCls} {...a11y("company")} />
                  {err("company")}
                </div>
              </div>
              <div>
                <label htmlFor="f-email" className="font-medium">Email <span aria-hidden>*</span></label>
                <input name="email" type="email" autoComplete="email" required className={inputCls} {...a11y("email")} />
                {err("email")}
              </div>
              <div>
                <label htmlFor="f-service" className="font-medium">Di cosa hai bisogno?</label>
                <select name="service" defaultValue={servizio ?? "non-so"} className={inputCls} {...a11y("service")}>
                  {serviceOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="f-message" className="font-medium">Descrivi la tua necessità <span aria-hidden>*</span></label>
                <p className="text-sm text-muted-foreground">Ad esempio: di cosa si occupa la tua attività, cosa non funziona o cosa vorresti ottenere.</p>
                <textarea name="message" rows={6} required className={inputCls} {...a11y("message")} />
                {err("message")}
              </div>
              {hasDirect && (
                <fieldset>
                  <legend className="font-medium">Come preferisci essere ricontattato?</legend>
                  <div className="mt-2 flex gap-6">
                    <label className="flex min-h-11 items-center gap-2"><input type="radio" name="contactPreference" value="email" defaultChecked /> Email</label>
                    {site.phone && <label className="flex min-h-11 items-center gap-2"><input type="radio" name="contactPreference" value="telefono" /> Telefono</label>}
                  </div>
                </fieldset>
              )}
              <div className="hidden" aria-hidden>
                <label>Lascia vuoto<input name="website" tabIndex={-1} autoComplete="off" /></label>
              </div>
              <div>
                <label className="flex items-start gap-3">
                  <input type="checkbox" name="privacy" className="mt-1.5 size-4" {...a11y("privacy")} />
                  <span>Ho letto l'<Link to="/privacy" className="text-primary underline">informativa privacy</Link> e acconsento al trattamento dei dati per ricevere una risposta.</span>
                </label>
                {err("privacy")}
              </div>
              {status === "error" && (
                <p role="alert" className="rounded-md border border-destructive p-3 text-destructive">
                  Non è stato possibile inviare il messaggio. Riprova tra qualche minuto{hasDirect ? " oppure usa i recapiti indicati a lato" : ""}.
                </p>
              )}
              <button type="submit" disabled={status === "sending"} className="inline-flex min-h-11 items-center rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60">
                {status === "sending" ? "Invio in corso…" : "Invia la richiesta"}
              </button>
            </form>
          )}
        </div>
        <aside className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Cosa succede dopo</h2>
            <ol className="mt-4 space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">1.</strong> Leggo la tua richiesta.</li>
              <li><strong className="text-foreground">2.</strong> Ti ricontatto per approfondire, se servono altre informazioni.</li>
              <li><strong className="text-foreground">3.</strong> Ti propongo una soluzione o un primo passo concreto, senza impegno.</li>
            </ol>
          </div>
          {hasDirect && (
            <div>
              <h2 className="text-xl font-semibold">Recapiti diretti</h2>
              <ul className="mt-4 space-y-3">
                {site.email && <li><a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center gap-2 text-primary hover:underline"><Mail className="size-5" aria-hidden />{site.email}</a></li>}
                {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 items-center gap-2 text-primary hover:underline"><Phone className="size-5" aria-hidden />{site.phone}</a></li>}
                {site.whatsapp && <li><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-primary hover:underline"><MessageCircle className="size-5" aria-hidden />Scrivimi su WhatsApp</a></li>}
              </ul>
            </div>
          )}
          <p className="text-sm text-muted-foreground">Lavoro tra {site.area}.</p>
        </aside>
      </section>
    </>
  );
}
