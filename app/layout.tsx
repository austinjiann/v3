import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Austin Jian",
  description: "Austin Jian - CS student at University of Waterloo building beautiful software.",
  keywords: ["Austin Jian", "University of Waterloo", "software engineer", "FlowBoard", "PlayCreate", "Plant Hopper", "Hack the 6ix", "Unto Labs", "CS student", "developer"],
  authors: [{ name: "Austin Jian" }],
  creator: "Austin Jian",
  openGraph: {
    title: "Austin Jian",
    description: "CS student at University of Waterloo building beautiful software.",
    url: "https://austinjian.ca",
    siteName: "Austin Jian",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Austin Jian",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Jian",
    description: "CS student at University of Waterloo building beautiful software.",
    creator: "@austinjian_",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
