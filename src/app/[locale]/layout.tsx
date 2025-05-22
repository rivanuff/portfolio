import type { Metadata } from "next";
import { Montserrat, Inconsolata } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactLenis } from "lenis/react";
import "../globals.css";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  setRequestLocale(locale);

  return (
    <ReactLenis root>
      <html
        lang={locale}
        className={`${montserrat.variable} ${inconsolata.variable}`}
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
