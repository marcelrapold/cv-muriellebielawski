import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marcelrapold.com";
const seoTitle = "Marcel Rapold | ICT Project Lead, AI Product & Platform Lead";
const seoDescription =
  "Technology leader with focus on AI products, digital platforms, and high-impact IT execution. Based in Zurich, Switzerland.";

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Marcel Rapold CV",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Marcel Rapold - ICT Project Lead, AI Product & Platform Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    creator: "@marcelrapold",
    images: ["/twitter-image"],
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
