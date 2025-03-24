import type { Metadata } from "next";
import { Merriweather, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/frontend/footer";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "@/config/meta";
const merriweather = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Kasese Hospital",
    "Healthcare in Uganda",
    "Hospital services Kasese",
    "Medical care Kasese",
    "Obstetrics and Gynecology Kasese",
    "Surgery Department Kasese",
    "Medical Department Kasese",
    "Laboratory services Uganda",
    "Imaging services Kasese",
    "Pediatrics Kasese",
    "Emergency care Kasese",
    "Counseling services Uganda",
    "Endoscopy Kasese",
    "Dental care Kasese",
    "Ambulance services Uganda",
    "Outpatient services Kasese",
    "Healthcare provider Uganda",
    "Quality healthcare Kasese",
    "Western Uganda hospital",
    "Patient care Kasese",
    "Medical specialists Uganda",
    "Maternal healthcare Kasese",
    "Child healthcare Uganda",
    "Diagnostic services Kasese",
    "Surgical procedures Uganda",
    "Medical treatment Kasese",
    "Healthcare facilities Uganda",
    "Hospital departments Kasese",
    "24/7 healthcare Uganda",
    "Medical professionals Kasese",
    "Healthcare consultations Uganda",
    "Medical emergency services",
    "Uganda healthcare system",
    "Hospital doctors Kasese",
    "Medical examinations Uganda",
    "Hospital appointments Kasese",
    "Healthcare technology Uganda",
    "Medical tests Kasese",
    "Patient support services",
    "Hospital facilities Uganda",
  ],
  authors: [
    {
      name: "JB web developer",
      url: "https://jb.desishub.com",
    },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  creator: "Kasese Hospital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
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
        <Toaster position="bottom-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
