import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Navigation } from "./components/nav";
import Header from "./components/header";

export const metadata: Metadata = {
  title: {
    default: "radidev.com",
    template: "%s | radidev.com",
  },
  description: "Co-founder of advarts.com",
  openGraph: {
    title: "radidev.com",
    description: "Co-founder of advarts.com",
    url: "https://radidev.com",
    siteName: "radidev.com",
    images: [
      {
        url: "https://radidev.com/RADI.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "radi_dev",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-secondary font-1 text-2xl sm:text-xl w-screen overflow-x-hidden ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}>
        <div className="fixed top-0 left-0 w-[5lvw] h-lvh z-[-1] flex justify-end">
          <div className="line"></div>
        </div>
        <div className="fixed top-0 left-[5lvw] w-[95lvw] h-lvh z-[-1] flex justify-evenly">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="fixed bg-dark w-[max(20lvh,20lvw)] h-[max(20lvh,20lvw)] rounded-full z-[-1] opacity-20 shadow-2xl -ml-32">
        </div>
        <div
          className="fixed bg-dark w-[max(20lvh,20lvw)] h-[max(20lvh,20lvw)] rounded-full z-[-1] opacity-20 shadow-2xl -ml-32 mt-12 left-1/2 top-1/3">
        </div>

        <Header />
        <Navigation />
        <div className=" mx-[5lvw] w-[95lvw]">{children}</div>
      </body>
    </html>
  );
}
