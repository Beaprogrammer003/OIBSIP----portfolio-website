import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Ashutosh Jha · Software Developer",
  description:
    "Portfolio of Ashutosh Jha, a software developer who builds web platforms and mobile apps, including Capsisure and the Capsitech app.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased selection:bg-sky-500/30">{children}</body>
    </html>
  );
}
