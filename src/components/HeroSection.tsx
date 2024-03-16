"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen bg-hero bg-cover flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center gap-4 bg-primary bg-opacity-90 backdrop-blur-sm p-16 rounded-l-2xl rounded-r-[150px]">
        <h1 className="text-white text-6xl font-bold text-center uppercase">
          Durand
        </h1>
        <p className="text-white text-lg font-regular text-center">
          {t("hero_description1")}
          <br />
          {t("hero_description2")}
        </p>
        <Link
          href="#categories-section"
          className="bg-secondary text-white font-medium px-6 py-3 rounded-xl cursor-pointer hover:scale-105 app_transition"
        >
          {t("hero_button")}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
