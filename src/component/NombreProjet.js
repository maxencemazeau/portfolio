import { useTranslation } from 'react-i18next';

export default function NombreProjet(){

    const { t } = useTranslation();

    const stats = [
        {
            data: "1",
            title: t('Client')
        },
        {
            data: "1",
            title: t('Personnel')
        },
    ]

    return (
        <section className="py-14 -mt-8">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        {t('TitreProjet')}
                    </h3>                 
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center px-12 md:px-16">
                                    <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}