import type { Metadata } from "next";
import "../../app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  title: "Gonçalo Sousa",
  description: "Gonçalo Sousa Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`antialiased bg-black bg-[length:5px_5px] bg-gradient-to-b from-neutral-900 via-neutral-900 to-black min-h-screen flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="pt-[124px] flex-grow">
            <div className="mx-auto max-w-4xl lg:text-lg text-white p-4">
              {children}
            </div>
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}