import { useTranslation } from 'react-i18next';

export default function Projet () {

    const { t } = useTranslation();

    const posts = [
        {
            title: "Epée Cégep de Rivère du Loup - Allaitement Quebec",
            desc: t('DescriptionProjet1'),
            img: "allaitement.png",
            authorName: t('Client'),
            date: "ReactJS / NodeJS / MySQL",
            href: "https://chat.allaitementquebec.org/Connexion"
        },
        {
            title: t('TitreProjet2'),
            desc: t('DescriptionProjet2'),
            img: "hestenn.png",
            authorName: t('Personnel'),
            date: "Html / CSS / Javascript",
            href: "https://www.hestenn.com/"
        },
        {
            title: t('TitreProjet3'),
            desc: t('DescriptionProjet3'),
            img: "wiseFinance.png",
            authorName: t('Personnel'),
            date: "ReactJs / NodeJS-Fastify / Tailwinds",
            href: "https://financewebsite.vercel.app/"
        },
    ]
    
    return (
        <section className="mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href} target="_blank" rel="noreferrer">
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
                                <div className="flex items-center mt-2 ml-4 pt-3 mr-2">                                   
                                    <div className="">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
