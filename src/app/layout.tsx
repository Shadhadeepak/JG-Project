import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

// Import the Lato font with the required weight
const lato = Roboto({ 
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "JG TAX CONSULTANT",
  description: "Best Tax Consultant in Chennai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
