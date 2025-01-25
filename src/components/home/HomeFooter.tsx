import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import LiveClock from "../ui/live-clock";

export default function HomeFooter() {
  const t = useTranslations("home.footer");

  const navItems = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/rivervanuffelen/",
    },
    {
      title: "CV",
      url: "/cv.pdf",
    },
    {
      title: "GitHub",
      url: "https://github.com/rivanuff",
    },
  ];

  return (
    <footer className="bg-palette-1 p-10 pt-10 rounded-[20px] flex flex-col items-center gap-y-12">
      <h2 className="font-medium text-4xl lg:text-[56px] xl:text-[100px] max-w-5xl text-center">
        {t("title")}
      </h2>

      <Image
        src="/images/lets-talk.png"
        width={134}
        height={134}
        alt="Icon calling you out to contact me"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center lg:justify-between w-full">
        <LiveClock className="text-center lg:text-left" />

        <nav>
          <ul className="flex flex-col lg:flex-row justify-center items-center gap-x-6">
            {navItems.map((item) => (
              <li key={item.title} className="px-6 py-3">
                <Link
                  target="_blank"
                  href={item.url}
                  className="font-medium uppercase flex items-center gap-x-1"
                >
                  {item.title}

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L1 9M9 1C9 1 7.88889 1.44444 5.66667 1.44444C3.44444 1.44444 2.33333 1 2.33333 1M9 1C9 1 8.55556 2.11111 8.55556 4.33333C8.55556 6.55556 9 7.66667 9 7.66667"
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="lg:justify-self-end text-center lg:text-right">
          {t("freelance")}
        </p>
      </div>
    </footer>
  );
}
