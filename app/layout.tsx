// import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { nunito } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Commcepta Canada",
  description:
    "This is the Commcepta Canada Web Page - Great White North Enterprise",
  keywords: [
    "Portfolio",
    "Graphic Design",
    "Industrial Design",
    "Web Design",
    "Web Development",
    "UX Design",
    "UI Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
