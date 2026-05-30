import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactAutoReply, sendContactNotification } from "@/lib/email";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limit = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 15 * 60_000 });

    if (!limit.ok) {
      return NextResponse.json(
        { error: `Previše upita. Pokušajte ponovo za ${limit.retryAfterSec} sekundi.` },
        { status: 429 }
      );
    }

    const body = await request.json();
    const honeypot = String(body.website ?? "").trim();
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim() || null;
    const message = String(body.message ?? "").trim();
    const privacyAccepted = Boolean(body.privacyAccepted);

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Unesite ime ili naziv firme." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Unesite ispravnu email adresu." }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return NextResponse.json({ error: "Poruka mora imati najmanje 10 karaktera." }, { status: 400 });
    }
    if (!privacyAccepted) {
      return NextResponse.json(
        { error: "Potrebna je saglasnost sa politikom privatnosti." },
        { status: 400 }
      );
    }

    await prisma.contactMessage.create({
      data: { name, email, phone, message },
    });

    await Promise.all([
      sendContactNotification({ name, email, phone: phone ?? undefined, message }),
      sendContactAutoReply({ name, email }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Trenutno nije moguće poslati upit. Pokušajte email ili telefon." },
      { status: 500 }
    );
  }
}
