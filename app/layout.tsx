import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollRevealProvider from "./components/ScrollRevealProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sithika Himandith | Creative Developer",
    template: "%s | Sithika Himandith",
  },
  description:
    "Sit is a Full Stack Developer specializing in Next.js, TypeScript, and modern web applications.",
  metadataBase: new URL("https://your-real-domain.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#000000] text-white`}>

        {/* 🌟 GLOBAL SCROLL REVEAL */}
        <ScrollRevealProvider />

        {/* 🧱 MAIN CONTENT */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}