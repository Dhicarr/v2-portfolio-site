import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richard's Personal Site",
  description: "Richard Ma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
