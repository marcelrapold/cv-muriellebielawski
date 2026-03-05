import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcel Rapold | Digital Leader",
  description: "IT Project Manager • Digital Innovation • Bitcoin | Zürich, Switzerland",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
