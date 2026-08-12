import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DEMON71 - Rover Team",
  description: "Official Website of Rover Team DEMON71",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased transition-colors duration-300 bg-white dark:bg-black text-slate-800 dark:text-white">
        <AppProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}