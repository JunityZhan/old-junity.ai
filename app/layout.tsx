import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Junity",
    template: "%s | junity.ai",
  },
  description: "Co-founder of TossTo.ai",
  openGraph: {
    title: "junity.ai",
    description:
      "Co-founder of TossTo.ai",
    url: "https://junity.ai",
    siteName: "junity.ai",
    images: [
      {
        url: "https://i.pximg.net/img-original/img/2024/01/29/23/59/01/115597667_p0.png",
        width: 1080,
        height: 1920,
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
    title: "Junity",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.jpg",
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
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}