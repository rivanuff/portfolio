import { cn, shuffleArray } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function HomeExpertise() {
  const t = useTranslations("home.expertise");

  const expertiseList = [
    "React",
    "Vue",
    "Next.js",
    "Nuxt",
    "Laravel",
    "JavaScript",
    "PHP",
    "SCSS",
    "HTML",
    "WCAG",
    "JSON:API",
    "WordPress",
    "Linux",
    "CI/CD",
    "Git",
    "Scrum",
    "Java",
    "Kotlin",
    "MongoDB",
  ];

  // Generate 4 randomized lists
  const randomizedLists = Array.from({ length: 4 }, () =>
    shuffleArray([...expertiseList])
  );

  return (
    <section
      className="bg-palette-6 text-palette-5 p-10 lg:py-16 rounded-[20px] gap-6 flex flex-col lg:flex-row w-full justify-between items-start"
      id="expertise"
    >
      <h2 className="text-4xl lg:text-[50px] font-medium">{t("title")}</h2>

      <div className="overflow-hidden h-60 w-full lg:w-auto">
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-x-12 text-lg lg:text-4xl font-medium">
          {randomizedLists.map((list, listIndex) => (
            <ul
              key={listIndex}
              className={cn(
                "animate-carousel-vertical space-y-4",
                listIndex % 2 == 1 && "direction-reverse"
              )}
              aria-hidden={listIndex !== 0}
            >
              {list.concat(list).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
