import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Himanshu",
  description:
    "Personal website of Himanshu, a software developer (backend/frontend) and AI enthusiast. I write about software development, AI, and other tech-related stuff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className=" fixed bg-transparent z-50 w-full">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
