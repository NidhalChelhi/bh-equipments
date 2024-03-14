"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Batteur from "@/models/Batteur";

const BatteurPage: React.FC = () => {
  const [batteur, setBatteur] = useState<Batteur | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const slug = window.location.pathname.split("/").pop();
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/batteurs/" + slug
        );
        setBatteur(response.data);
      } catch (error) {
        console.error("Error fetching batteur:", error);
      }
    };

    fetchData();
  }, []);

  if (!batteur) {
    return <p>Loading...</p>;
  }

  return (
    <main className="overflow-x-hidden flex flex-col">
      <div className="min-h-20 bg-primary" />
      <section className="h-44 bg-primary flex flex-col items-center justify-center gap-4 px-6 lg:px-12 xl:px-32 2xl:px-64 text-white text-center">
        <h1 className="font-bold text-4xl md:text-5xl">Batteur Mélangeur</h1>
        <p className="text-sm md:text-base">
          Optimisez votre expérience de pâtisserie avec nos batteurs mélangeurs
          professionnels de pâte.
        </p>
      </section>
      <section className="flex flex-col  py-12 gap-8 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-64">
        <div className="flex items-center justify-start gap-2">
          <span className="text-xl text-primary">Produits</span>
          <ChevronRight strokeWidth={4} size={16} />
          <span className="text-xl text-primary">Batteur Mélangeur</span>
          <ChevronRight strokeWidth={4} size={16} />
          <span className="text-xl text-gray-700">{batteur.model}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
          <div className="col-span-2 border-[1px] border-[#D4D2E3] rounded-3xl p-4">
            <img
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                "/api/" +
                batteur.images[selectedImage]
              }
              alt={batteur.name}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="col-span-1 flex flex-col items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="font-semibold text-4xl text-primary">
                {batteur.name} <br />
                <span className="font-bold"> {batteur.model}</span>
              </h3>

              <p>{batteur.description}</p>
              <div className="rounded-2xl bg-gray-200 w-fit px-4 py-2">
                <p className="font-semibold text-sm text-green-600 capitalize">
                  {batteur.stock === "available" ? (
                    <span className="text-green-500">En Stock</span>
                  ) : (
                    <span className="text-red-500">Indisponible</span>
                  )}
                </p>
              </div>
            </div>

            {batteur.images.length > 1 && (
              <div className="grid grid-cols-2 items-center justify-center gap-y-2 gap-x-2 w-full">
                {batteur.images.map((img, index) => (
                  <div
                    key={index}
                    className="border-[1px] border-[#D4D2E3] rounded-3xl p-4 cursor-pointer hover:scale-[101%] app_transition w-full h-full flex items-center justify-center"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      key={index}
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                        "/api/" +
                        batteur.images[index]
                      }
                      alt={batteur.name}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <h2 className="font-bold text-2xl">Fiche Technique:</h2>
        <div className="hidden sm:block w-full">
          <table className="table-auto text-center w-full ">
            <thead>
              <tr>
                <th className="py-2 px-4">Modèle</th>
                <th>Capacité Cuve(L)</th>
                <th>Puissance (KW)</th>
                <th>Poids (kg)</th>
                <th>Alimentation</th>
                <th>Vitesse du fouet</th>
                <th>Dimensions (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{batteur.model} </td>
                <td>{batteur.cuveCapacity}</td>
                <td>{batteur.puissance}</td>
                <td className="py-2 px-4"> {batteur.poids} </td>
                <td>{batteur.alimentation}</td>
                <td>{batteur.vitesse}</td>
                <td>{batteur.dimensions}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="sm:hidden w-full flex flex-col items-center justify-center gap-4">
          <table
            className="table-auto text-center w-full "
            style={{
              borderTop: "1px solid #D4D2E3",
            }}
          >
            <tbody>
              <tr>
                <td className="font-semibold">Modèle</td>
                <td>{batteur.model} </td>
              </tr>

              <tr>
                <td className="font-semibold">Capacité Cuve(L)</td>
                <td>{batteur.cuveCapacity}</td>
              </tr>
              <tr>
                <td className="font-semibold">Puissance (KW)</td>
                <td>{batteur.puissance}</td>
              </tr>
              <tr>
                <td className="font-semibold">Poids (kg)</td>
                <td className="py-2 px-4"> {batteur.poids} </td>
              </tr>
              <tr>
                <td className="font-semibold">Alimentation</td>
                <td>{batteur.alimentation}</td>
              </tr>
              <tr>
                <td className="font-semibold">Vitesse du fouet</td>
                <td>{batteur.vitesse}</td>
              </tr>
              <tr>
                <td className="font-semibold">Dimensions (mm)</td>
                <td>{batteur.dimensions}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default BatteurPage;
