import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// 1. IMPORT YOUR NEW FLOATING CHAT COMPONENT
import FloatingChat from "@/components/FloatingChat";

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

  // FEATURE FLAG: Set to false to hide the chat from the public!
  const ENABLE_CHATBOT = false;

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} !scroll-smooth`}>
      <body>
        
        {/* Your actual page content loads here */}
        <main>{children}</main>

        {/* 2. Render the chat ONLY if the flag is true */}
        {ENABLE_CHATBOT && <FloatingChat />}
        
      </body>
    </html>
  );
}