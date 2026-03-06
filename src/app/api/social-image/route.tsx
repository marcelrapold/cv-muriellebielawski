import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("lang") === "de" ? "de" : "en";

  const content =
    locale === "de"
      ? {
          eyebrow: "Murielle Bielawski",
          title: "HR Operations | Business Support",
          subtitle: "Marketing Coordination | B.Sc. International Business",
          footer: "Strukturiert. Zuverlässig. Serviceorientiert.",
        }
      : {
          eyebrow: "Murielle Bielawski",
          title: "HR Operations | Business Support",
          subtitle: "Marketing Coordination | B.Sc. International Business",
          footer: "Structured. Reliable. Service-oriented.",
        };

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "linear-gradient(135deg, #0f0f0f 0%, #171717 55%, #2c2c2c 100%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 860 }}>
            <div
              style={{
                fontSize: 28,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#f59e0b",
                display: "flex",
              }}
            >
              {content.eyebrow}
            </div>
            <div
              style={{
                fontSize: 68,
                fontWeight: 700,
                lineHeight: 1.05,
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {content.title}
            </div>
            <div
              style={{
                fontSize: 32,
                color: "#e5e7eb",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {content.subtitle}
            </div>
          </div>

          <div
            style={{
              height: 168,
              width: 168,
              borderRadius: 9999,
              border: "2px solid rgba(245, 158, 11, 0.55)",
              background: "linear-gradient(180deg, #f3f4f6 0%, #d1d5db 100%)",
              color: "#111827",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 64,
              fontWeight: 700,
            }}
          >
            MB
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              height: 2,
              width: "100%",
              background: "linear-gradient(90deg, rgba(245,158,11,0.9) 0%, rgba(245,158,11,0.15) 100%)",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 30,
              color: "#d1d5db",
              display: "flex",
            }}
          >
            {content.footer}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
