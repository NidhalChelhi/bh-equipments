"use client";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../context/i18n";
const dm_sans = DM_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "DURAND - BH Equipments",
//   description: "BH Equipments",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <title>DURAND - BH Equipments</title>
      </head>
      <body className={dm_sans.className}>
        <I18nextProvider i18n={i18n}>
          <Navbar />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          {children}
          <Footer />
        </I18nextProvider>
      </body>
    </html>
  );
}
