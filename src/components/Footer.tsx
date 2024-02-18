import Link from "next/link";
import React from "react";

const footerLinks = [
    {
        title: "Nos Catégories",
        links: [
            {
                title: "Mixeurs",
                href: "/mixeurs",
            },
            {
                title: "Mélangeurs",
                href: "/melangeurs",
            },
        ],
    },
    {
        title: "Nos Meilleurs Produits",
        links: [
            {
                title: "Produit #001",
                href: "/products/1",
            },
            {
                title: "Produit #002",
                href: "/products/2",
            },
        ],
    },
    {
        title: "Nos Contacts",
        links: [
            {
                title: "+216 24 699 556",
                href: "tel:+21624699556",
            },
            {
                title: "bh.equipments@gmail.com",
                href: "mailto:nidhalelchelhi@gmail.com",
            },
            {
                title: "123 Rue Principale, Marseille, France",
                href: "",
            },
        ],
    },
];



const Footer = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="w-full bg-[#fafafa] flex flex-col lg:flex-row lg:justify-between  items-center justify-center  py-16 px-12 xl:px-24 gap-8">
                <div className="flex flex-col items-center justify-center gap-10">
                    <div className="w-64 ">
                        <img src="main-logo.svg" className="object-contain" />
                    </div>
                    <div className="flex items-center justify-center gap-10"><Link href="/">
                        <img src="icons/facebook.svg" className="w-6" />
                    </Link>
                        <Link href="/">
                            <img src="icons/instagram.svg" className="w-6" />
                        </Link>
                        <Link href="/">
                            <img src="icons/twitter.svg" className="w-6" />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:items-start gap-10">
                    {footerLinks.map((section) => (
                        <div key={section.title} className="flex flex-col items-center sm:items-start gap-6 lg:gap-12">
                            <h3 className="font-bold text-lg">{section.title}</h3>
                            {section.links.map((link) => (
                                <Link key={link.title} href={link.href}>
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full bg-primary h-20 flex flex-row items-center text-center justify-between text-white text-sm px-12">
                <span>
                    © 2023 Durand, Inc. - Tous Droits Réservés
                </span>
                <div className="hidden md:flex items-center justify-center gap-20">
                    <span> Conditions d'utilisation</span>
                    <span>Politique de confidentialité</span>
                </div>
            </div>
        </div>

    );
};

export default Footer;
