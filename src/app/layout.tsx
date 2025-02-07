import type { Metadata } from "next";
import { Montserrat, Inconsolata } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactLenis } from "lenis/react";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "River van Uffelen",
  description:
    "River van Uffelen is a full-stack web developer based in The Netherlands.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <ReactLenis root>
      <html
        lang={locale}
        className={`${montserrat.variable} ${inconsolata.variable} antialiased`}
      >
        <body>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
        <GoogleAnalytics gaId="G-HCT2WS80Q0" />
      </html>
    </ReactLenis>
  );
}
