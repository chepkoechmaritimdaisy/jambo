import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PackagesHeader from "@/components/PackagesHeader";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InklessIsMore.ke",
  description: "Professional Tattoo Removal in Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.className} bg-background-light dark:bg-background-dark font-display text-[#111618] dark:text-white`}>
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <Header />
            <PackagesHeader />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}
