import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cv-muriellebielawski.vercel.app";
const seoTitle = "Murielle Bielawski | HR Operations, Business Support & Marketing Coordination";
const seoDescription =
  "Murielle Bielawski is a B.Sc. International Business graduate and M.Sc. Business Administration candidate with hands-on experience in HR operations, administrative coordination, marketing, and customer-facing business processes in Berlin.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | Murielle Bielawski",
  },
  description: seoDescription,
  applicationName: "Murielle Bielawski CV",
  keywords: [
    "Murielle Bielawski",
    "HR Operations",
    "Business Support",
    "Administrative Coordination",
    "Marketing Coordination",
    "Berlin",
    "International Business",
    "Business Administration",
  ],
  authors: [{ name: "Murielle Bielawski", url: siteUrl }],
  creator: "Murielle Bielawski",
  publisher: "Murielle Bielawski",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl,
      de: `${siteUrl}?lang=de`,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "de_DE",
    url: siteUrl,
    siteName: "Murielle Bielawski CV",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: "/api/social-image?lang=en",
        alt: "Murielle Bielawski CV preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/api/social-image?lang=en"],
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

export const viewport: Viewport = {
  themeColor: "#0f0f0f",
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
