"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="corporate" className="scroll-smooth" style={{scrollBehavior: "smooth"}}>
      <head/>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
