"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import DescriptionCard from "./DescriptionCard";
import Link from "next/link";
import { useTranslation } from "react-i18next";


const AboutSection = () => {
    const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center py-20 gap-8 text-center px-4">
      <h1 className="text-5xl sm:text-7xl font-medium "> {t("about_title")}</h1>

      <p className="text-grey text-lg ">
       {t("about_description")}
      </p>
      <Link
        href="/about"
        className="group flex flex-row gap-2 items-center justify-center cursor-pointer"
      >
        <span className="text-primary text-lg font-medium">{t("learn_more")}</span>
        <div className="group-hover:animate-pulse">
          <MoveRight color="#234189" />
        </div>
      </Link>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-20  lg:gap-40 py-12 lg:py-24 px-12  lg:px-12  w-full mx-auto">
        <div className="flex flex-col items-start justify-start text-start gap-12">
          <h1 className="text-5xl font-medium text-center lg:text-start w-full  ">
            {t("why_choose_us_title1")}
            <br /> {t("why_choose_us_title2")}
          </h1>
          <Image
            src="/aboutus.png"
            alt="Why Choose Us"
            width={487}
            height={374}
            className="hidden lg:block"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 items-start justify-center gap-11 ">
          <DescriptionCard
            imageUrl="/icons/mixer.png"
            title={t("versatility_title")}
            description={t("versatility_description")}
          />
          <DescriptionCard
            imageUrl="/icons/rocket.png"
            title={t("innovation_title")}
            description={t("innovation_description")}
          />
          {/* <DescriptionCard
            imageUrl="/icons/eiffel-tower.png"
            title="Made in France"
            description="Durand conçoit, développe et réalise ses pétrins entièrement en France."
          /> */}
          <DescriptionCard
            imageUrl="/icons/service.png"
            title={t("technical_assistance_title")}
            description={t("technical_assistance_description")}
          />
        </div>
      </div>
      <div className="bg-banner min-h-32 mx-full bg-cover bg-center flex flex-col lg:flex-row py-14 md:py-28 px-10 md:px-20 gap-12 bg-primary rounded-3xl text-start">
        <h2 className="text-white text-4xl  md:text-5xl lg:text-6xl font-medium">
          {t( "world_class_manufacturing1")}
          <br /> {t( "world_class_manufacturing2")} <br />
          {t( "world_class_manufacturing3")}
        </h2>
        <div className="flex flex-col items-start justify-center gap-8">
          <p className="text-white text-xl ">
            {t("world_class_manufacturing_description1")}<br />
            {t("world_class_manufacturing_description2")}
          </p>
          <Link
            href="tel:+330177994947"
            className="group bg-white hover:bg-secondary 
                    hover:scale-[103%] app_transition rounded-full py-4 px-12 text-center"
          >
            <span className="group-hover:text-white app_transition font-medium text-2xl ">
              {t("book_call")}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
