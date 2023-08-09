import React, { useState } from "react"
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import Alert from "./Alert";

export default function Contact() {

  const [sujet, setSujet] = useState('');
  const [objet, setObjet] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [alert, setAlert] = useState(false);

  const { t } = useTranslation();

  const envoieCourriel = async(e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/send-email`, { email , sujet, objet, name})
    setAlert(true);
  }

  const closeAlert = async() => {
    setAlert(false)
  }

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
              onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="sr-only" for="phone">Sujet - Optionnel</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder={t('ContactTelephone')}
                type="tel"
                id="phone"
                onChange={(e) => setSujet(e.target.value)}
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
              onChange={(e) => setObjet(e.target.value)}
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              onClick={envoieCourriel}
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              {t('ContactEnvoyer')}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  {alert && 
  <Alert closeAlert={closeAlert}  />}
</section>
)
}