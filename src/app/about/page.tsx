"use client";
import CustomInput from "@/components/CustomInput";
import { Send, SendHorizonal } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { z, ZodError } from "zod";

const AboutPage = () => {
    return (
        <main className="overflow-x-hidden flex flex-col">
            <div className="min-h-20 bg-primary" />
            <section className="h-44 bg-primary flex flex-col items-center justify-center gap-4 px-6 lg:px-12 xl:px-32 2xl:px-64 text-white text-center">
                <h1 className="font-bold text-4xl md:text-5xl">À Propos Nous</h1>
                <p className="text-sm md:text-base">
                    Soyez les bienvenus dans notre univers. Nous sommes là pour vous,
                    prêts à répondre rapidement.
                </p>
            </section>
            <section className="flex flex-col py-8 gap-8 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-64">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-x-24 gap-y-8">
                    <div className="rounded-3xl overflow-hidden">
                        <img
                            src="about1.png"
                            alt="about1"
                            className=" w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-2xl ">Durand French Mix</h3>
                        <p className="text-lg">
                            est une entreprise française qui conçoit et fabrique des pétrins
                            spirales et batteur mélangeur pour la boulangerie pâtisserie
                            artisanale et industrielle.
                        </p>
                        <h2 className="font-bold text-3xl text-secondary">En 2022</h2>
                        <p className="text-lg">Notre marque Durand French Mix a vu le jour</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-x-24 gap-y-8">

                    <div className="flex flex-col gap-4">
                        <h3 className="hidden sm:flex font-bold text-2xl ">Durand French Mix</h3>
                        <p className="text-lg">
                            C’est une filiale du groupe HBY Holding qui a
                            maintenant une expérience de plus de quinze années dans le domaine de la boulangerie pâtisserie.
                            Les principaux objectifs de notre marque sont de créer et de concevoir des pétrins et batteurs de qualité
                            innovantes et performantes.
                        </p>

                    </div>
                    <div className="rounded-3xl overflow-hidden">
                        <img
                            src="about2.png"
                            alt="about2"
                            className=" w-full  object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
