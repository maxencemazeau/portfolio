import React from "react"
import { useTranslation } from 'react-i18next';

export default function Contact() {

  const { t } = useTranslation();

return(
<section className="bg-gray-100 mt-16">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
        {t('ContactText')}
        </p>

        <div className="mt-8">
          <p className="text-2xl font-bold text-blue-600">
            450 231 7094
          </p>

          <address className="mt-2 not-italic">
          {t('Ville')}
          </address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" for="name">Nom - Prénom</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder={t('ContactNom')}
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">Courriel</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder={t('ContactEmail')}
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" for="phone">Téléphone - Optionnel</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder={t('ContactTelephone')}
                type="tel"
                id="phone"
              />
            </div>
          </div>

         

          <div>
            <label className="sr-only" for="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              {t('ContactEnvoyer')}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
)
}