import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomeIntro() {
  const t = useTranslations("home.intro");

  return (
    <div className="bg-palette-1 p-10 pt-24 rounded-[20px]">
      <div className="mb-16 mt-36">
        <h1 className="text-3xl lg:text-[56px] xl:text-[100px] max-w-4xl font-medium leading-none">
          {t.rich("title", {
            gradient: (chunks) => (
              <span className="bg-gradient-to-r from-palette-7 to-palette-4 inline-block text-transparent bg-clip-text">
                {chunks}
              </span>
            ),
          })}
        </h1>
        <p className="text-lg lg:text-2xl mt-6">{t("description")}</p>
      </div>

      <div className="flex justify-between items-end">
        <p className="flex text-sm lg:text-base items-center before:mr-2 before:animate-pulse-live before:size-2 before:shrink-0 before:bg-red-600 before:rounded-full">
          {t("status")}
        </p>

        <button className="hidden md:inline-block">
          <Image
            src="/images/scroll-down.png"
            alt="Icon implying the page can be scrolled down"
            height={106}
            width={106}
          />
        </button>
      </div>
    </div>
  );
}
