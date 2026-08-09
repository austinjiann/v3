import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://austinjian.ca"),
  title: "Austin Jian",
  description: "Austin Jian - CS student at University of Waterloo building beautiful software.",
  keywords: ["Austin Jian", "University of Waterloo", "software engineer", "FlowBoard", "PlayCreate", "Phoebe", "Unto Labs", "CS student", "developer"],
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const theme=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',theme!=="light")}catch{document.documentElement.classList.add('dark')}`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
