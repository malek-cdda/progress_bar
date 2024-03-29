"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import { AppProgressBar } from "next-nprogress-bar";
import Link from "next/link";
import { AppProgressBar } from "@/utils/ProgressBar/appDir";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center gap-4 border rounded-md shadow-lg py-3 px-4">
          <Link
            href="/"
            className="bg-blue-300 hover:bg-blue-400 rounded-xl px-4 py-2">
            {" "}
            Home
          </Link>

          <Link
            href="/products"
            className="bg-blue-300 hover:bg-blue-400 rounded-xl px-4 py-2">
            {" "}
            Products
          </Link>
        </div>
        {children}{" "}
        <AppProgressBar
          height="4px"
          color="red"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
