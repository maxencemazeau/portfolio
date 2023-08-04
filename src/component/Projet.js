export default function Projet () {

    const posts = [
        {
            title: "Epée Cégep de Rivère du Loup - Allaitement Quebec",
            desc: "Extension du site web d'Allaitement avec mise en place d'un chat live, d'inscription à des activités et automatisations d'emails. Réalisé dans une équipe de 3 développeurs.",
            img: "allaitement.png",
            authorName: "Professionnel",
            date: "ReactJS / NodeJS / MySQL",
            href: "https://chat.allaitementquebec.org/Connexion"
        },
        {
            title: "Site vitrine Hestenn",
            desc: "Création et intégration de template pour un site vitrine one page pour entreprise.",
            img: "hestenn.png",
            authorName: "Personnel",
            date: "Html / CSS / Javascript",
            href: "www.hestenn.com"
        },
    ]
    
    return (
        <section className="mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
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
