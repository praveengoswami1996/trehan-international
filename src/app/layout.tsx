import type { Metadata } from "next";
import { Work_Sans, Sintony, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NavbarProvider } from "@/contexts/NavbarContext";

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
})

const sintony = Sintony({
  weight: ["400", "700"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sintony',
})

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Trehan International",
  description: "Recruitment Consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} ${workSans.variable} ${poppins.variable} ${sintony.variable}`}>
        <NavbarProvider>
          <Header />
            <main>
              {children}
            </main>
          {/* <Footer /> */}
        </NavbarProvider>
      </body>
    </html>
  );
}
