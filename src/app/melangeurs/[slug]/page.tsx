"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Product {
    category: string;
    slug: string;
    images: Array<string>;
    name: string;
    description: string;
    _id: string;
}

const ProductPage: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const slug = window.location.pathname.split("/").pop();
                const response = await axios.get(
                    `https://bh-equipments-back.onrender.com/api/products/${slug}`
                );
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchData();
    }, []);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <main className="overflow-x-hidden flex flex-col">
            <div className="min-h-20 bg-primary" />
            <section className="h-44 bg-primary flex flex-col items-center justify-center gap-4 px-6 lg:px-12 xl:px-32 2xl:px-64 text-white text-center">
                <h1 className="font-bold text-4xl md:text-5xl">Mélangeurs</h1>
                <p className="text-sm md:text-base">
                    Optimisez votre expérience de pâtisserie avec nos mélangeurs
                    professionnels de pâte.
                </p>
            </section>
            <section className="flex flex-col  py-12 gap-8 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-64">
                <div className="flex items-center justify-start gap-2">
                    <span className="text-xl text-primary">Produits</span>
                    <ChevronRight strokeWidth={4} size={16} />
                    <span className="text-xl text-primary">Mélangeurs</span>
                    <ChevronRight strokeWidth={4} size={16} />
                    <span className="text-xl text-gray-700">{product.name}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
                    <div className="col-span-2 border-[1px] border-[#D4D2E3] rounded-3xl p-16">
                        <Image
                            alt={`Main ${product.name} image`}
                            width={600}
                            height={750}
                            src={product.images[selectedImage]}
                            className="h-full w-full object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
                        />
                    </div>
                    <div className="col-span-1 flex flex-col items-start justify-start gap-4">
                        <div className="flex flex-col items-start justify-start gap-4">
                            <h3 className="font-bold text-4xl text-primary">
                                {product.name}
                            </h3>

                            <p>{product.description}</p>
                            <div className="rounded-2xl bg-gray-300 w-fit px-4 py-2">
                                <span className="font-semibold text-sm text-green-600">
                                    En Stock
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 items-center justify-center gap-y-2 gap-x-2 w-full">
                            {product.images.map((img, index) => (
                                <div
                                    key={index}
                                    className="border-[1px] border-[#D4D2E3] rounded-3xl p-4 cursor-pointer hover:scale-[101%] app_transition w-full h-full flex items-center justify-center"
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img
                                        key={index}
                                        src={img}
                                        alt={product.name}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <h2 className="font-bold text-2xl">Fiche Technique:</h2>
                <div className="hidden sm:block w-full">
                    <table className="table-auto text-center w-full ">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">Matiére</th>
                                <th>Masse</th>
                                <th>Vitesse</th>
                                <th>Puissance</th>
                                <th>Activation</th>
                                <th>Garantie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Acier Inoxydable</td>
                                <td>2 kg</td>
                                <td>60 tr/min</td>
                                <td className="py-2 px-4">10.5 KW</td>
                                <td>Monophasé</td>
                                <td>2 ans</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="sm:hidden w-full flex flex-col items-center justify-center gap-4">
                    <table className="table-auto text-center w-full">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">Matiére</th>
                                <th>Masse</th>
                                <th>Vitesse</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">Acier Inoxydable</td>
                                <td>2 kg</td>
                                <td>60 tr/min</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table-auto text-center w-full">
                        <thead>
                            <tr>
                                <th className="py-2 px-4">Puissance</th>
                                <th>Activation</th>
                                <th>Garantie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">10.5 KW</td>
                                <td>Monophasé</td>
                                <td>2 ans</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default ProductPage;
