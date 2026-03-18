import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/Footer";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rapchai.com"),
  title: {
    default: "Rapchai — Food. Music. Conversations.",
    template: "%s | Rapchai",
  },
  description: "A café and community space in Bangalore where people gather over food, culture, and ideas. Discover your third place through our communities, music, and collaborative events.",
  keywords: ["Rapchai", "Café Bangalore", "Community Space", "MyThirdPlace", "HSR Layout", "Bangalore Events", "Creative Hub"],
  authors: [{ name: "Rapchai Team" }],
  creator: "Rapchai",
  publisher: "Rapchai",
  formatDetection: {
    email: false,
    address: true,
    telephone: false,
  },
  openGraph: {
    title: "Rapchai — Food. Music. Conversations.",
    description: "A café and community space in Bangalore where people gather over food, culture, and ideas.",
    url: "https://rapchai.com",
    siteName: "Rapchai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rapchai — Food. Music. Conversations.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapchai — Food. Music. Conversations.",
    description: "Café + community space in Bangalore. Join our creative gatherings.",
    images: ["/og-image.png"],
    creator: "@rapchai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${mono.variable} antialiased`}
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        {/* Navbar removed as requested */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
