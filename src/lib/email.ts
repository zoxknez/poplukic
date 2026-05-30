import { siteConfig } from "@/lib/site";

type ContactEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendContactNotification(payload: ContactEmailPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? siteConfig.email;
  const from = process.env.CONTACT_FROM ?? `POP-LUKIĆ <onboarding@resend.dev>`;

  const subject = `Novi upit sa sajta – ${payload.name}`;
  const text = [
    `Ime / firma: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Telefon: ${payload.phone}` : null,
    "",
    "Poruka:",
    payload.message,
    "",
    `Poslato sa: ${siteConfig.url}`,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact-email:preview]", { to, subject, text });
    }
    return false;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    console.error("[contact-email]", await res.text());
    return false;
  }

  return true;
}

export async function sendContactAutoReply(payload: Pick<ContactEmailPayload, "name" | "email">): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const from = process.env.CONTACT_FROM ?? `POP-LUKIĆ <onboarding@resend.dev>`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [payload.email],
      subject: `Primili smo vaš upit – ${siteConfig.shortName}`,
      text: [
        `Poštovani/a ${payload.name},`,
        "",
        "Hvala na upitu. Naš tim će vam odgovoriti u roku od 24 radna sata.",
        "",
        `Telefon: ${siteConfig.phone}`,
        `Email: ${siteConfig.email}`,
        "",
        siteConfig.name,
      ].join("\n"),
    }),
  }).catch((err) => console.error("[contact-auto-reply]", err));
}
