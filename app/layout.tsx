import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedMeasure | Precision Wound Tracking",
  description: "Advanced digital wound measurement and tracking platform for clinicians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${space.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
