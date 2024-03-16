"use client";
import Batteur from "@/models/Batteur";
import Petrin from "@/models/Petrin";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ProductCard: React.FC<{ product: Batteur | Petrin }> = ({ product }) => {
  const { t } = useTranslation();
  return (
    <Link
      href={`${
        product.category === "Batteur Mélangeur"
          ? "/batteurs/[slug]"
          : "/petrins/[slug]"
      }`}
      as={`${
        product.category === "Batteur Mélangeur"
          ? `/batteurs/${product.slug}`
          : `/petrins/${product.slug}`
      }`}
    >
      <div className="flex flex-col gap-2 border-[1px] border-[#D4D2E3] rounded-3xl px-4 py-6 hover:scale-[101%] app_transition cursor-pointer">
        <img
          src={
            process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
            "/api/" +
            product.images[0]
          }
          alt={product.name}
          className="max-h-[380px] object-contain w-full "
        />
        <h3 className="font-bold text-xl text-primary">{t(product.name)}</h3>
        <p>{product.model}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
