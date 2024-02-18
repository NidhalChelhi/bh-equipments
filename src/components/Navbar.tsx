"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigationLinks = [
        { title: "Acceuil", route: "/" },
        {
            title: "Produits",
            subItems: [
                { title: "Mixeurs", route: "/mixeurs" },
                { title: "Mélangeurs", route: "/melangeurs" },
                // Add more sub-items as needed
            ],
        },
        { title: "Contacts", route: "/contact" },
        { title: "À Propos", route: "/about" },
    ];

    return (
        <nav className="w-full h-20 flex justify-between items-center fixed z-[50] px-6 sm:px-12 md:px-24 py-4 bg-primary bg-opacity-80 backdrop-blur-sm  ">
            <img src="logo.svg" alt="Durand Logo" className="h-20 py-4" />

            <ul className="hidden lg:flex justify-center items-center list-none gap-20">
                {navigationLinks.map((item) => (
                    <li
                        className="group flex justify-center items-end p-text cursor-pointer flex-col relative"
                        key={`link-${item.title}`}
                    >
                        <span
                            className="relative text-white no-underline flex-col font-medium app_transition group-hover:text-teritiary"
                            onClick={() => {
                                if (item.title === "Produits") {
                                    setShowDropdown(!showDropdown);
                                } else {
                                    setShowDropdown(false);
                                }
                            }}
                        >
                            {item.title === "Produits" ? (
                                <div className="flex items-center justify-center gap-1">

                                    {item.title}
                                    <ChevronDown size={18} strokeWidth={3} />

                                </div>
                            ) : (
                                <Link href={`${item.route}`}>{item.title} </Link>
                            )}

                            {item.title === "Produits" && showDropdown && (
                                <ul className="absolute top-full left-0 bg-white rounded-xl overflow-hidden shadow-lg mt-2 py-1 ">
                                    {item.subItems?.map((subItem) => (
                                        <li key={`sub-link-${subItem.title}`}>
                                            <Link
                                                href={`${subItem.route}`}
                                                className="block px-8 py-4 text-gray-800 hover:bg-gray-200 "
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

            <img
                src="/icons/language.png"
                alt="Facebook"
                className="hidden lg:flex w-[36px] h-[36px]  hover:scale-105 app_transition cursor-pointer"
            />

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
                            {navigationLinks.map((item) => (
                                item.subItems ? (
                                    <li key={item.title} className="flex flex-col items-center justify-center gap-4">
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

                            ))}
                            <div className="flex flex-row gap-2 items-center justify-center">
                                <img
                                    src="/icons/language.png"
                                    alt="Facebook"
                                    className="w-[28px] h-[28px]  hover:scale-105 app_transition"
                                />
                                <span className="text-white text-lg">FR</span>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
