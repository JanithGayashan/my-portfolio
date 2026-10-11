import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Configure the fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter', 
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins', 
});

export const metadata: Metadata = {
  title: "Janith Gayashan | AI Engineer",
  description: "My personal portfolio showcasing projects in AI and software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} !scroll-smooth`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
