import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import clsx from "clsx";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create by hossain",
  description: "go buy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(poppins.className,"bg-light text-dark ")} >
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
