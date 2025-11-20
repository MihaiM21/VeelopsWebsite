import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Veelops - Easy App Deployment Platform",
  description: "Deploy your applications effortlessly with Veelops. The modern platform for seamless app deployment, similar to Coolify and Dokploy but better.",
  keywords: ["app deployment", "docker", "self-hosted", "devops", "containers"],
  authors: [{ name: "Veelops Team" }],
  openGraph: {
    title: "Veelops - Easy App Deployment Platform",
    description: "Deploy your applications effortlessly with Veelops",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
