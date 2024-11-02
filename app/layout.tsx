"use client"
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@mui/material/Button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const ToHomeBtn: React.FC = () => {
  return (
    <Link href="/">
      <Button variant="outlined">
        На главную
      </Button>
    </Link>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {pathname !== "/" ? <ToHomeBtn/> : <></>}
      {children}
      </body>
    </html>
  );
}
