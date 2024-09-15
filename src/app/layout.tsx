import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Gonçalo Sousa",
  description: "Gonçalo Sousa Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black bg-[length:6px_6px] bg-gradient-to-b from-neutral-900 via-neutral-900 to-black min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="pt-[124px] flex-grow">
          <div className="mx-auto max-w-4xl lg:text-lg text-white p-4">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}