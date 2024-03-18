"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Photo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-cover bg-no-repeat w-auto lg:mx-12 mx-6 shadow-md relative overflow-hidden flex items-center justify-center rounded-3xl mt-8 h-96 bg-top bg-[url('/le.png')]">
      <div className="text-white text-center">
        <h2 className="text-5xl font-semibold font-montserrat mb-5">
          {t("contact_header")}
        </h2>
        <p>{t("contact_description")}</p>
      </div>
    </div>
  );
};

export default Photo;
