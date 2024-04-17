"use client";
import ProductCard from "@/components/ProductCard";
import Petrin from "@/models/Petrin";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RotatingLines } from "react-loader-spinner";

const Petrins: React.FC = () => {
  const [petrins, setPetrins] = useState<Petrin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/petrins/all"
        );
        // sort by model
        response.data.sort((a: Petrin, b: Petrin) =>
          a.model.localeCompare(b.model, undefined, { numeric: true })
        );
        setPetrins(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="overflow-x-hidden flex flex-col">
      <div className="min-h-20 bg-primary" />
      <section className="h-44 bg-primary flex flex-col items-center justify-center gap-4 px-6 lg:px-12 xl:px-32 2xl:px-64 text-white text-center">
        <h1 className="font-bold text-4xl md:text-5xl">{t("petrin")}</h1>
        <p className="text-sm md:text-base">{t("petrin_header_description")}</p>
      </section>
      <section className="flex flex-col py-12 gap-8 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-64">
        <div className="flex items-center justify-start gap-2">
          <span className="text-xl text-primary">{t("products")}</span>
          <ChevronRight strokeWidth={4} size={16} />
          <span className="text-xl text-gray-700">{t("petrin")}</span>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-8">
            <p>{t("loading_products")}</p>
            <RotatingLines
              visible={true}
              width="60"
              strokeColor="#ef3a47"
              strokeWidth="3"
              animationDuration="2"
            />
          </div>
        ) : petrins.length === 0 ? (
          <p>{t("no_products_found")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {petrins.map((petrin, index) => (
              <ProductCard key={petrin._id} product={petrin} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Petrins;
