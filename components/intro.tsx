"use client"
import React from "react";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const BrainteractIntro = () => {
  const t = useTranslations('intro');
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'tr' ? 'en' : 'tr';
    router.push(`/${newLocale}`);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleLanguage}
      >
        {t('switchLanguage')}
      </button>
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-4">{t('description1')}</p>
      <p className="mb-4">{t('description2')}</p>
      <p className="font-semibold">{t('developer')}</p>
      <p className="text-sm text-gray-600 mt-4">{t('development')}</p>
    </div>
  );
};

export default BrainteractIntro;