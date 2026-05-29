import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Unesite ime ili naziv firme." }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Unesite ispravnu email adresu." }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return NextResponse.json({ error: "Poruka mora imati najmanje 10 karaktera." }, { status: 400 });
    }

    await prisma.contactMessage.create({
      data: { name, email, message },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Trenutno nije moguće poslati upit. Pokušajte email ili telefon." },
      { status: 500 }
    );
  }
}
