"use client";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const CategoriesSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="categories-section"
      className="flex flex-col items-center justify-center py-20 gap-8 text-center px-4"
    >
      <h1 className="text-5xl sm:text-7xl font-medium ">
        {t("catgeories_title")}
      </h1>
      <p className="text-grey text-lg ">Aperçu de nos catégories</p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mx-8">
        <Link
          href="/petrins"
          className="group w-full  flex flex-col items-center justify-center gap-6"
        >
          <div className="h-fit w-full rounded-2xl border-[1px] border-teritiary flex items-center justify-center py-4 px-16">
            <img
              src="petrin.jpg"
              className="group-hover:scale-105 app_transition w-96"
            />
          </div>
          <span className="text-3xl font-medium">Pétrin Spirale</span>
        </Link>
        <Link
          href="/batteurs"
          className="group w-full flex flex-col items-center justify-center gap-6"
        >
          <div className="h-fit w-full rounded-2xl border-[1px] border-teritiary flex items-center justify-center py-4 px-16">
            <img
              src="batteur.jpg"
              className="group-hover:scale-105 app_transition w-96"
            />
          </div>
          <span className="text-3xl font-medium">Batteur Mélangeur</span>
        </Link>
      </div>
    </section>
  );
};

export default CategoriesSection;
