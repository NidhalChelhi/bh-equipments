"use client";
import ProductCard from "@/components/ProductCard";
import Petrin from "@/models/Petrin";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const Petrins: React.FC = () => {
  const [petrins, setPetrins] = useState<Petrin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/petrins/all"
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
        <h1 className="font-bold text-4xl md:text-5xl">Pétrins Spirale</h1>
        <p className="text-sm md:text-base">
          Optimisez votre expérience de pâtisserie avec nos Pétrins Spirale
          professionnels de pâte.
        </p>
      </section>
      <section className="flex flex-col py-12 gap-8 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-64">
        <div className="flex items-center justify-start gap-2">
          <span className="text-xl text-primary">Produits</span>
          <ChevronRight strokeWidth={4} size={16} />
          <span className="text-xl text-gray-700">Pétrins Spirale</span>
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-8">
            <p>Chargement des produits...</p>
            <RotatingLines
              visible={true}
              width="60"
              strokeColor="#ef3a47"
              strokeWidth="3"
              animationDuration="2"
            />
          </div>
        ) : petrins.length === 0 ? (
          <p>
            Aucun produit de la catégorie "Pétrins Spirale" disponible pour le
            moment.
          </p>
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
