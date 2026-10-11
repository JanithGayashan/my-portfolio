import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import MotionPreferences from "@/components/MotionPreferences";
import SkipLink from "@/components/SkipLink";
import { profile } from "@/data/profile";
import { allowIndexing, siteUrl } from "@/lib/site";
import "./globals.css";

// Configure the fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.introduction,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} | ${profile.role}`,
    description: profile.introduction,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.introduction,
    images: ["/opengraph-image"],
  },
  robots: { index: allowIndexing, follow: allowIndexing },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <SkipLink />
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
