import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitChangelog AI — AI-powered changelog generator from commits",
  description: "Analyzes git commits and generates customer-friendly changelogs with proper categorization and impact assessment. Built for product and engineering teams.",
  openGraph: {
    title: "GitChangelog AI — AI-powered changelog generator from commits",
    description: "Turn raw git commits into polished, customer-friendly changelogs in seconds.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="8989bd3c-6c2a-4508-bc67-255431f0f409"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
