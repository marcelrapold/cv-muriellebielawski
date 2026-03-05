import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, rgb(12,12,14) 0%, rgb(23,23,28) 50%, rgb(12,12,14) 100%)",
          color: "white",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Marcel Rapold
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 34,
              fontWeight: 600,
              color: "rgb(245, 158, 11)",
            }}
          >
            ICT Project Lead, AI Product & Platform Lead
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 24,
              color: "rgb(201, 201, 205)",
              maxWidth: 960,
            }}
          >
            Technology leader focused on digital platforms, automation, and
            systems that perform.
          </div>
          <div
            style={{
              marginTop: 34,
              fontSize: 22,
              color: "rgb(161, 161, 170)",
            }}
          >
            Zurich, Switzerland
          </div>
        </div>
      </div>
    ),
    size
  );
}
