import Link from "next/link";
import React from "react";

const CategoriesSection = () => {
    return (
        <section id="categories-section" className="flex flex-col items-center justify-center py-20 gap-8 text-center px-4">
            <h1 className="text-5xl sm:text-7xl font-medium ">Nos Catégories</h1>
            <p className="text-grey text-lg ">Aperçu de nos catégories</p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mx-8">
                <Link href="/melangeurs" className="group w-full  flex flex-col items-center justify-center gap-6">
                    <div className=" h-fit  w-full rounded-2xl border-[1px] border-teritiary flex items-center justify-center">
                        <img src="melangeurs.png" className="group-hover:scale-105 app_transition w-96" />
                    </div>
                    <span className="text-3xl font-medium">Mélangeurs</span>
                </Link>
                <Link href="/mixeurs" className="group w-full  flex flex-col items-center justify-center gap-6">
                    <div className="  h-fit bg-red-  w-full rounded-2xl border-[1px] border-teritiary flex items-center justify-center">
                        <img src="mixeurs.png" className="group-hover:scale-105 app_transition w-96" />
                    </div>
                    <span className="text-3xl font-medium">Mixeurs</span>
                </Link>
            </div>
        </section>
    );
};

export default CategoriesSection;
