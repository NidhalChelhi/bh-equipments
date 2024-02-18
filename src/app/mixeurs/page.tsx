"use client"
import axios from "axios";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Product {
    category: string;
    slug: string;
    images: Array<string>;
    name: string;
    description: string;
    _id: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <Link href="/mixeurs/[slug]" as={`/mixeurs/${product.slug}`}>
        <div className="flex flex-col gap-4 border-[1px] border-[#D4D2E3] rounded-3xl px-4 py-6 hover:scale-[101%] app_transition cursor-pointer">
            <img src={product.images[0]} alt={product.name} />
            <h3 className="font-bold text-xl text-primary">{product.name}</h3>
            <p>{product.description}</p>
        </div>
    </Link>
);

const Mixeurs: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://bh-equipments-back.onrender.com/api/products");
                setProducts(response.data.filter((product: Product) => product.category === "mixeurs"));
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
                <h1 className="font-bold text-4xl md:text-5xl">Mixeurs</h1>
                <p className="text-sm md:text-base">
                    Optimisez votre expérience de pâtisserie avec nos mixeurs professionnels de pâte.
                </p>
            </section>
            <section className="flex flex-col py-12 gap-8 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-64">
                <div className="flex items-center justify-start gap-2">
                    <span className="text-xl text-primary">Produits</span>
                    <ChevronRight strokeWidth={4} size={16} />
                    <span className="text-xl text-gray-700">Mixeurs</span>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : products.length === 0 ? (
                    <p>Aucun produit de la catégorie "Mixeurs" disponible pour le moment.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {products.map((product, index) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default Mixeurs;
