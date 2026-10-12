import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Inserisci il tuo nome").max(100, "Massimo 100 caratteri"),
  company: z.string().trim().max(120, "Massimo 120 caratteri").optional().or(z.literal("")),
  email: z.string().trim().min(1, "Inserisci la tua email").email("Controlla l'indirizzo email").max(255),
  service: z.enum(["non-so", "siti-web", "automazione", "software", "consulenza"]),
  message: z.string().trim().min(10, "Descrivi la tua necessità in almeno qualche parola").max(3000, "Massimo 3000 caratteri"),
  contactPreference: z.enum(["email", "telefono", ""]).optional(),
  privacy: z.literal(true, { errorMap: () => ({ message: "Per inviare il messaggio devi leggere l'informativa privacy" }) }),
  website: z.string().max(0).optional(), // honeypot anti-spam
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => contactSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      company: data.company || null,
      email: data.email,
      service: data.service,
      message: data.message,
      contact_preference: data.contactPreference || null,
    });
    if (error) {
      console.error("contact insert failed", error.message);
      throw new Error("Invio non riuscito");
    }
    return { ok: true };
  });
