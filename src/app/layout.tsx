import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cv-muriellebielawski.vercel.app";
const seoTitle = "Murielle Bielawski CV | B.Sc. Business Administration";
const seoDescription =
  "Murielle Bielawski's CV: Bachelor of Science in Business Administration with experience in HR, marketing, administration, and customer-facing operations in Berlin.";

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
    "Business Administration",
    "HR",
    "Marketing",
    "Working Student",
    "Berlin",
    "International Business",
  ],
  authors: [{ name: "Murielle Bielawski", url: siteUrl }],
  creator: "Murielle Bielawski",
  publisher: "Murielle Bielawski",
  alternates: {
    canonical: siteUrl,
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
    url: siteUrl,
    siteName: "Murielle Bielawski CV",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: "/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Murielle Bielawski - B.Sc. Business Administration",
      },
      {
        url: "/og-image-1200x1200.png",
        width: 1200,
        height: 1200,
        alt: "Murielle Bielawski portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    creator: "@muriellebielawski",
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
