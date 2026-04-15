import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers"; // ✅ import wrapper
import "./globals.css";

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
        
        {/* ✅ Wrap with client provider */}
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}