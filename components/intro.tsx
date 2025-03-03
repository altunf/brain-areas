"use client";
import React from "react";
import { useTranslations } from "next-intl";
const BrainteractIntro = () => {
  const t = useTranslations("intro");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
      <p className="mb-4">{t("description1")}</p>
      <p className="mb-4">{t("description2")}</p>
      <p className="font-semibold">
        <a 
          href="https://www.firataltun.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-500 transition-colors"
        >
          {t("developer")}
        </a>
      </p>
      <p className="text-sm text-gray-600 mt-4">{t("development")}</p>
    </div>
  );
};

export default BrainteractIntro;
