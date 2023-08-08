import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer(){

  const { t } = useTranslation();

    return(
        <footer className="bg-white">
  <div
    className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
  >
<div className="border-t-2 border-gray-200"></div>
    <p className="text-xs text-gray-500">
      &copy; 2023. Maxence MAZEAU. {t('Footer')}
    </p>
  </div>
</footer>
    )
}