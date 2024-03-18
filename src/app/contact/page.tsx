"use client";
import React from "react";
import Card from "./components/Card";
import Icon from "./components/Icon";
import Photo from "./components/Photo";
import Form from "./components/Form";
import { useTranslation } from "react-i18next";

interface CardData {
  cardIcon: JSX.Element;
  title: string;
  description: string;
}

export default function Contact() {
  const { t } = useTranslation();

  const cardsData: CardData[] = [
    {
      cardIcon: (
        <Icon icon="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      ),
      title: `${t("contact_form_phone")}`,
      description: "12548693578",
    },
    {
      cardIcon: (
        <Icon icon="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
      ),
      title: `${t("contact_form_address")}`,
      description: "contact@durand.fr",
    },
    {
      cardIcon: (
        <Icon
          icon="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
          circle={<circle cx="12" cy="10" r="3" />}
        />
      ),
      title: `${t("contact_form_location")}`,
      description: "France",
    },
  ];

  return (
    <main className="overflow-x-hidden flex flex-col">
      <Photo />
      <div className="mx-10 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="col-span-2">
            <h1 className="text-2xl font-bold my-4">{t("contact_header")}</h1>
            <Form />
          </div>
        </div>
        <div className="col-span-1">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              cardIcon={card.cardIcon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
