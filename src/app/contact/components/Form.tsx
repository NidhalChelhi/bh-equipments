"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { z, ZodError } from "zod";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const schema = z.object({
  firstname: z.string().min(3, {
    message: "Le prénom doit comporter au moins 3 caractères",
  }),
  lastname: z.string().min(3, {
    message: "Le nom doit comporter au moins 3 caractères",
  }),
  email: z
    .string()
    .email({ message: "Veuillez saisir une adresse e-mail valide" }),
  num: z.string(),
  description: z.string().min(15, {
    message: "La description doit comporter au moins 15 caractères",
  }),
});

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  num: string;
  description: string;
}

export default function Form() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    num: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState<ZodError | null>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          from_name: formData.firstname + formData.lastname,
          to_name: "BH Equipments",
          from_email: formData.email,
          to_email: "contact@durand.fr",
          message: `Phone Number: ${formData.num}
                        Message: ${formData.description}
                        `,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      );

      toast.success("Message Envoyé: Merci! Nous répondrons bientôt", {
        theme: "colored",
      });
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        num: "",
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            id="lastname"
            name="lastname"
            placeholder={t("contact_form_lastName")}
            type="text"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          <Input
            id="firstname"
            name="firstname"
            placeholder={t("contact_form_firstName")}
            type="text"
            value={formData.firstname}
            onChange={handleInputChange}
          />
          <Input
            id="email"
            name="email"
            placeholder={t("contact_form_email")}
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            id="num"
            name="num"
            isRequired={false}
            placeholder={t("contact_form_phone")}
            type="text"
            value={formData.num}
            onChange={handleInputChange}
          />
        </div>
        <Textarea
          id="description"
          name="description"
          placeholder={t("contact_form_message")}
          value={formData.description}
          onChange={handleInputChange}
        />
        <Button />
      </form>
      <ToastContainer />
    </div>
  );
}
