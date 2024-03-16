"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import Petrin from "@/models/Petrin";
import { useTranslation } from "react-i18next";

const PetrinPage: React.FC = () => {
  const [petrin, setPetrin] = useState<Petrin | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const slug = window.location.pathname.split("/").pop();
        const response = await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/petrins/" + slug
        );
        setPetrin(response.data);
      } catch (error) {
        console.error("Error fetching petrins:", error);
      }
    };

    fetchData();
  }, []);

  if (!petrin) {
    return <p>Loading...</p>;
  }

  return (
    <main className="overflow-x-hidden flex flex-col">
      <div className="min-h-20 bg-primary" />
      <section className="h-44 bg-primary flex flex-col items-center justify-center gap-4 px-6 lg:px-12 xl:px-32 2xl:px-64 text-white text-center">
        <h1 className="font-bold text-4xl md:text-5xl">{t("petrin")}</h1>
        <p className="text-sm md:text-base">{t("petrin_header_description")}</p>
      </section>
      <section className="flex flex-col  py-12 gap-8 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-64">
        <div className="flex items-center justify-start gap-2">
          <span className="text-xl text-primary">{t("products")}</span>
          <ChevronRight strokeWidth={4} size={16} />
          <span className="text-xl text-primary">{t("petrin")}</span>
          <ChevronRight strokeWidth={4} size={16} />
          <span className="text-xl text-gray-700">{petrin.model}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
          <div className="col-span-2 border-[1px] border-[#D4D2E3] rounded-3xl p-4">
            <img
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                "/api/" +
                petrin.images[selectedImage]
              }
              alt={petrin.name}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="col-span-1 flex flex-col items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="font-semibold text-4xl text-primary">
                {petrin.name} <br />
                <span className="font-bold"> {petrin.model}</span>
              </h3>
              <p>{petrin.description}</p>
              <div className="rounded-2xl bg-gray-300 w-fit px-4 py-2">
                <p className="font-semibold text-sm text-green-600 capitalize">
                  {petrin.stock === "available" ? (
                    <span className="text-green-500">{t("available")}</span>
                  ) : (
                    <span className="text-red-500">{t("out_of_stock")}</span>
                  )}
                </p>
              </div>
            </div>

            {petrin.images.length > 1 && (
              <div className="grid grid-cols-2 items-center justify-center gap-y-2 gap-x-2 w-full">
                {petrin.images.map((img, index) => (
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
                        petrin.images[index]
                      }
                      alt={petrin.name}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <h2 className="font-bold text-2xl">{t("technical_specifications")}</h2>
        <div className="hidden sm:block w-full">
          <table className="table-auto text-center w-full ">
            <thead>
              <tr>
                <th className="py-2 px-4">{t("model")}</th>
                <th>{t("farineCapacity")}</th>
                <th>{t("patteCapacity")}</th>
                <th>{t("volume")}</th>
                <th>{t("puissance")}</th>
                <th>{t("poids")}</th>
                <th>{t("dimensions")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{petrin.model} </td>
                <td>{petrin.farineCapacity}</td>
                <td>{petrin.patteCapacity}</td>
                <td className="py-2 px-4"> {petrin.volume} </td>
                <td>{petrin.puissance}</td>
                <td>{petrin.poids}</td>
                <td>{petrin.dimensions}</td>
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
                <td className="font-semibold">{t("model")}</td>
                <td>{petrin.model} </td>
              </tr>

              <tr>
                <td className="font-semibold">{t("farineCapacity")}</td>
                <td>{petrin.farineCapacity}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("patteCapacity")}</td>
                <td>{petrin.patteCapacity}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("volume")}</td>
                <td className="py-2 px-4"> {petrin.volume} </td>
              </tr>
              <tr>
                <td className="font-semibold">{t("puissance")}</td>
                <td>{petrin.puissance}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("poids")}</td>
                <td>{petrin.poids}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("dimensions")}</td>
                <td>{petrin.dimensions}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default PetrinPage;
