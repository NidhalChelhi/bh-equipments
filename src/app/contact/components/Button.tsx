import React from "react";
import { useTranslation } from "react-i18next";

const Button: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="my-3">
      <button
        type="submit"
        style={{
          backgroundColor: "#234189",
          color: "white",
        }}
        className="px-14 py-2 bg-gray-50 rounded-xl"
      >
        {t("contact_form_button")}
      </button>
    </div>
  );
};

export default Button;
