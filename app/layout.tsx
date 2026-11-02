import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans", // globals.css reads this as var(--font-sans)
  display: "swap",
});

export const metadata: Metadata = {
  title: "IELTS Buddy",
  description: "A site made by an IELTS instructor to help you with IELTS, grammar and your overall English skills. ",
};

/* Runs BEFORE the page paints, so a dark-mode visitor never sees a white flash.
   Order: saved choice -> else the device's setting -> else light. */
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("theme");
    var theme = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the script above changes <html> before React loads
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}