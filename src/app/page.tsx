import HomeExpertise from "@/components/home/HomeExpertise";
import HomeFooter from "@/components/home/HomeFooter";
import HomeIntro from "@/components/home/HomeIntro";
import SiteHeader from "@/components/section/SiteHeader";

export default function Home() {
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
