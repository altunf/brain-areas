"use client"
import React, { useState } from "react";

const BrainteractIntro = () => {
  const [language, setLanguage] = useState("tr");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
      >
        {language === "tr" ? "Switch to English" : "Türkçeye Geç"}
      </button>
      {language === "tr" ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Brainteract: Beyni ve Sinir Sistemini Keşfetmenin Yeni Yolu</h1>
          <p className="mb-4">
            Brainteract, beyin ve sinir sistemini daha iyi anlamak için geliştirilen interaktif bir 3D platformdur.
            Gerçekçi modeller ve açıklamalar sayesinde teorik bilgileri görselleştirerek daha anlaşılır hale getirmeyi amaçlamaktadır.
            Brainteract ile beyin loblarını, nöronları ve sinir ağlarını detaylı bir şekilde inceleyebilir, her bir bölgeye tıklayarak ilgili bilimsel bilgilere ulaşabilirsiniz.
          </p>
          <p className="mb-4">
            Bu platform, sinirbilime ilgi duyan öğrenciler, araştırmacılar ve meraklılar için faydalı bir kaynak olabilir.
            Beynin işleyişini keşfetmek, nöronların nasıl iletişim kurduğunu anlamak ve sinir sisteminin yapısını daha yakından incelemek için Brainteract ile etkileşime geçebilirsiniz.
            Hem öğrenmeye hem de keşfetmeye açık bir ortam sunarak sinirbilimin karmaşıklığını daha erişilebilir hale getirmeyi hedefliyoruz.
          </p>
          <p className="font-semibold">Brainteract, psikolog Fırat Altun tarafından geliştirilmiştir.</p>
          <p className="text-sm text-gray-600 mt-4">
            Bu proje halen geliştirilmektedir. Bu nedenle bazı hatalarla karşılaşabilirsiniz. Geri bildirimleriniz bizim için değerlidir!
          </p>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Brainteract: A New Way to Explore the Brain and Nervous System</h1>
          <p className="mb-4">
            Brainteract is an interactive 3D platform designed to provide a deeper understanding of the brain and nervous system.
            Through realistic models and detailed explanations, it aims to make theoretical knowledge more accessible by visualizing complex structures.
            With Brainteract, you can explore brain lobes, neurons, and neural networks in detail, clicking on each region to access relevant scientific information.
          </p>
          <p className="mb-4">
            This platform serves as a valuable resource for students, researchers, and anyone interested in neuroscience.
            By interacting with Brainteract, you can discover how the brain functions, understand how neurons communicate, and closely examine the structure of the nervous system.
            Our goal is to make neuroscience more accessible by offering an open environment for both learning and exploration.
          </p>
          <p className="font-semibold">Brainteract was developed by psychologist Fırat Altun.</p>
          <p className="text-sm text-gray-600 mt-4">
            This project is still under development, so you may encounter some errors. Your feedback is valuable to us!
          </p>
        </>
      )}
    </div>
  );
};

export default BrainteractIntro;
