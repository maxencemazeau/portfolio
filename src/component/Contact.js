import React from "react"

export default function Contact() {

return(
<section className="bg-gray-100 mt-16">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
        Si vous avez des questions concernant mes projets, compétences ou tout autre sujet lié au développement web, n'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités de collaboration,
         que ce soit pour un projet à court terme ou une collaboration à plus long terme.
        </p>

        <div className="mt-8">
          <a className="text-2xl font-bold text-blue-600">
            450 231 7094
          </a>

          <address className="mt-2 not-italic">
            Ville de Québec, QC
          </address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" for="name">Nom - Prénom</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Nom - Prénom"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">Courriel</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Courriel"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" for="phone">Téléphone - Optionnel</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Téléphone - Optionnel"
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
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
)
}