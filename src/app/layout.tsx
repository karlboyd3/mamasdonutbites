import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mama's Donut Bites | Fresh Hot Mini Donuts in the DMV",
  description:
    "Made-to-order mini donuts served fresh and hot at markets, parties, weddings, and events across Arlington, DC, and Northern Virginia.",
  keywords: [
    "mini donuts",
    "food truck",
    "DMV",
    "Northern Virginia",
    "Arlington",
    "catering",
    "events",
    "donut bites",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-body text-chocolate">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
