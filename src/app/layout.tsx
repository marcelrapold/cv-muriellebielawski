import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcelrapold.com";
const seoTitle = "Marcel Rapold CV | ICT Project Lead, AI Product & Platform Lead, EMBA";
const seoDescription =
  "Marcel Rapold's CV: ICT Project Lead and AI Product & Platform Lead with focus on digital platforms, automation, and high-impact IT execution in Zurich, Switzerland.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | Marcel Rapold",
  },
  description: seoDescription,
  applicationName: "Marcel Rapold CV",
  keywords: [
    "Marcel Rapold",
    "ICT Project Lead",
    "AI Product Lead",
    "Platform Lead",
    "Digital Transformation",
    "Zurich",
    "Switzerland",
    "Bitcoin",
    "Lightning Network",
    "EMBA",
  ],
  authors: [{ name: "Marcel Rapold", url: siteUrl }],
  creator: "Marcel Rapold",
  publisher: "Marcel Rapold",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Marcel Rapold CV",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: "/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Marcel Rapold - ICT Project Lead, AI Product & Platform Lead",
      },
      {
        url: "/og-image-1200x1200.png",
        width: 1200,
        height: 1200,
        alt: "Marcel Rapold portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    creator: "@marcelrapold",
    images: ["/twitter-image-1200x600.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
