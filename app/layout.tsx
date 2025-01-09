import type { Metadata } from "next";
import { Merriweather, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/frontend/footer";
const merriweather = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <div className="bg-white">{children}</div>
      </body>
    </html>
  );
}
