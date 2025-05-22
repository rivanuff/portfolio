import HomeExpertise from "@/components/home/HomeExpertise";
import HomeFooter from "@/components/home/HomeFooter";
import HomeIntro from "@/components/home/HomeIntro";
import SiteHeader from "@/components/section/SiteHeader";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main className="p-5 bg-palette-5 text-palette-2 flex flex-col gap-y-5">
        <HomeIntro />
        <HomeExpertise />
        <HomeFooter />
      </main>
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
