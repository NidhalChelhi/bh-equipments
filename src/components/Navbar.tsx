"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const path = usePathname();
  console.log(path);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    if (language === "fr") {
      setLanguage("en");
    } else {
      setLanguage("fr");
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const navigationLinks = [
    { title: t("Acceuil"), route: "/" },
    {
      title: t("Produits"),
      subItems: [
        { title: t("petrin"), route: "/petrins" },
        { title: t("batteur"), route: "/batteurs" },
      ],
    },
    { title: t("Contacts"), route: "/contact" },
    { title: t("À Propos"), route: "/about" },
  ];

  return (
    <nav
      className={`w-full h-20 flex justify-between items-center fixed z-[50] px-6 sm:px-12 md:px-24 py-4 ${
        path === "/"
          ? "bg-white border-b-white bg-opacity-20 backdrop-blur-md border-b-[2px] border-opacity-10 text-primary"
          : "bg-primary text-white backdrop-blur-sm "
      }`}
    >
      <img src="logo.svg" alt="Durand Logo" className="h-20 py-4" />

      <ul className="hidden lg:flex justify-center items-center list-none gap-20">
        {navigationLinks.map((item) => (
          <li
            className="group flex justify-center items-end p-text cursor-pointer flex-col relative"
            key={`link-${item.title}`}
          >
            <span
              className="relative  no-underline flex-col font-medium app_transition group-hover:text-teritiary"
              onClick={() => {
                if (item.title === t("Produits")) {
                  setShowDropdown(!showDropdown);
                } else {
                  setShowDropdown(false);
                }
              }}
            >
              {item.title === t("Produits") ? (
                <div className="flex items-center justify-center gap-1">
                  {item.title}
                  <ChevronDown size={18} strokeWidth={3} />
                </div>
              ) : (
                <Link href={`${item.route}`}>{item.title} </Link>
              )}

              {item.title === t("Produits") && showDropdown && (
                <ul className="absolute top-full left-0 bg-white rounded-xl overflow-hidden shadow-lg mt-2 py-1 ">
                  {item.subItems?.map((subItem) => (
                    <li key={`sub-link-${subItem.title}`}>
                      <Link
                        href={`${subItem.route}`}
                        className="block px-8 py-4 text-gray-800 hover:bg-gray-200 truncate"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <div className="absolute -bottom-2 rounded-full -right-0 -z-10 w-[50px] h-[3px] mb-[5px] bg-transparent group-hover:bg-teritiary app_transition " />
            </span>
          </li>
        ))}
      </ul>
      {/* Language Selector */}
      <div className="hidden lg:flex gap-4 items-center">
        {language === "fr" ? (
          <button
            onClick={() => changeLanguage("fr")}
            className="flex flex-row items-center gap-2 w-full font-semibold hover:scale-105 app_transition cursor-pointer"
          >
            <img
              src="/france.png"
              alt="france"
              width={30}
              height={30}
              className="object-cover"
            />
            FR
          </button>
        ) : (
          <button
            onClick={() => changeLanguage("en")}
            className="flex flex-row items-center gap-2 w-full font-semibold hover:scale-105 app_transition cursor-pointer"
          >
            <img
              src="/uk.png"
              alt="uk"
              width={30}
              height={30}
              className="object-cover"
            />
            EN
          </button>
        )}
      </div>

      <div className="lg:hidden w-[35px] h-[35px] relative flex justify-center items-center ">
        <Menu
          onClick={() => setToggle(true)}
          className="w-[100%] h-[100%] text-white"
        />

        {toggle && (
          <div className="lg:hidden fixed z-[5] w-full h-fit flex justify-end items-end flex-col bg-primary py-4 pb-16 right-0 inset-y-0 text-center">
            <div className="w-[35px] h-[35px]  flex justify-center items-center rounded-full mx-4 my-2">
              <X
                className="w-[100%] h-[100%] text-white "
                onClick={() => setToggle(false)}
              />
            </div>

            <ul className="h-full w-full flex justify-center items-center flex-col m-0 px-8 list-none gap-8 select-none cursor-pointer ">
              {navigationLinks.map((item) =>
                item.subItems ? (
                  <li
                    key={item.title}
                    className="flex flex-col items-center justify-center gap-4"
                  >
                    <span
                      className="text-white no-underline text-lg  font-semibold"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      {item.title}
                    </span>

                    <ul className="flex flex-col gap-4">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            className="text-white text-base no-underline"
                            href={`${subItem.route}`}
                            onClick={() => setToggle(false)}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.title}>
                    <Link
                      className="text-white no-underline font-semibold text-lg   "
                      href={`${item.route}`}
                      onClick={() => setToggle(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              )}
              <div className="flex gap-4 items-center">
                <button
                  onClick={() => changeLanguage("fr")}
                  className="flex flex-row items-center gap-2 w-full font-semibold text-white hover:scale-105 app_transition cursor-pointer"
                >
                  <img
                    src="/france.png"
                    alt="france"
                    width={30}
                    height={30}
                    className="object-cover"
                  />
                  FR
                </button>
                <div className=" w-[2px] h-5 bg-white bg-opacity-50" />

                <button
                  onClick={() => changeLanguage("en")}
                  className="flex flex-row items-center gap-2 w-full font-semibold text-white hover:scale-105 app_transition cursor-pointer"
                >
                  <img
                    src="/uk.png"
                    alt="uk"
                    width={30}
                    height={30}
                    className="object-cover"
                  />
                  EN
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
