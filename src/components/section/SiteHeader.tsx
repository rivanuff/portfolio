"use client";

import { debounce } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SiteHeader() {
  const t = useTranslations("header");
  const headerElement = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = debounce(
      () => {
        if (headerElement.current) {
          const classes = [
            "shadow-card",
            "lg:shadow-none",
            "shadow-palette-2",
            "scale-[102.5%]",
            "lg:scale-100",
          ];

          if (window.scrollY > 0) {
            headerElement.current.classList.add(...classes);
          } else {
            headerElement.current.classList.remove(...classes);
          }
        }
      },
      window.screen.width < 1024 ? 100 : 1000
    );

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-5 w-full z-10 text-palette-2 px-5">
      <div
        className="flex justify-center lg:justify-between items-center py-5 px-14 bg-palette-1 rounded-[20px] transition-all"
        ref={headerElement}
      >
        <Link href="/" className="font-mono text-2xl">
          River van Uffelen
        </Link>

        <ul className="hidden lg:flex items-center gap-x-6">
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

        <button className="hidden lg:inline-block uppercase font-medium rounded-full p-0.5 bg-linear-to-r from-palette-4 to-palette-3 overflow-hidden shadow-md shadow-palette-3/25">
          <div className="flex items-center gap-x-1 py-2 px-4 bg-palette-1 rounded-full">
            {t("cta")}
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
          </div>
        </button>
      </div>
    </header>
  );
}
