import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoPath = join(process.cwd(), "public/images/logo.png");
  const logoBuffer = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
          background: "radial-gradient(ellipse at 70% 30%, #222e52 0%, #0d152c 55%, #070c1c 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", marginBottom: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={220}
            height={220}
            style={{
              borderRadius: 24,
              boxShadow: "0 20px 48px rgba(0,0,0,0.5)",
              border: "2px solid rgba(216,180,106,0.6)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#ffffff",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Drvena ambalaža i rezana građa
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#d8b46a",
            lineHeight: 1.4,
          }}
        >
          Palete · Gajbice · Građa · Transport · ISPM 15 · FSC™
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
            marginTop: 20,
          }}
        >
          {siteConfig.address.city} · Od {siteConfig.founded}.
        </div>
      </div>
    ),
    size
  );
}
