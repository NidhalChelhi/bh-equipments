"use client";
import CustomInput from "@/components/CustomInput";
import { SendHorizonal } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { z, ZodError } from "zod";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const schema = z.object({
  fullname: z.string().min(5, {
    message: "Le nom et prénom doivent comporter au moins 5 caractères",
  }),
  email: z
    .string()
    .email({ message: "Veuillez saisir une adresse e-mail valide" }),
  phoneNumber: z.string(),
  city: z.string(),
  description: z.string().min(15, {
    message: "La description doit comporter au moins 30 caractères",
  }),
});

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    city: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState<ZodError | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      schema.parse(formData);
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        {
          from_name: formData.fullname,
          to_name: "BH Equipments",
          from_email: formData.email,
          to_email: "contact@durand.fr",
          message: `Phone Number: ${formData.phoneNumber}
                        City: ${formData.city}
                        Message: ${formData.description}
                        `,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      );

      toast.success("Message Envoyé: Merci! Nous répondrons bientôt", {
        theme: "colored",
      });
      setFormData({
        fullname: "",
        email: "",
        phoneNumber: "",
        city: "",
        description: "",
      });
      setFormErrors(null);
    } catch (error) {
      if (error instanceof ZodError) {
        setFormErrors(error);
      }
      toast.error("Merci de vérifier vos informations avant de procéder.", {
        theme: "colored",
      });
    }
  };

  return (
    <main className="overflow-x-hidden flex flex-col">
      <div className="min-h-20 bg-primary" />
      <section className="h-44 bg-primary flex flex-col items-center justify-center gap-4 px-6 lg:px-12 xl:px-32 2xl:px-64 text-white text-center">
        <h1 className="font-bold text-4xl md:text-5xl">
          {t("contact_header")}
        </h1>
        <p className="text-sm md:text-base">{t("contact_description")}</p>
      </section>
      <section className="flex flex-col py-16 gap-8 px-6 sm:px-12 md:px-20 xl:px-32 2xl:px-64">
        <h2 className="font-bold text-2xl ">{t("contact_form_title")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end justify-end">
            <CustomInput
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              label={t("contact_form_name")}
              placeholder=""
              required
            />
            <CustomInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              label={t("contact_form_email")}
              placeholder=""
              required
            />
            <CustomInput
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              label={t("contact_form_phone")}
              placeholder=""
            />
            <CustomInput
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              label={t("contact_form_address")}
              placeholder=""
            />
            <CustomInput
              type="textarea"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              label={t("contact_form_message")}
              placeholder=""
              required
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-secondary text-white text-xl font-bold px-8 lg:px-24 py-3 rounded-2xl hover:bg-primary-dark transition-colors duration-300 mt-4 w-fit h-fit flex items-center justify-end gap-2"
              >
                <span>{t("contact_form_button")}</span>
                <SendHorizonal color="white" size={24} />
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
