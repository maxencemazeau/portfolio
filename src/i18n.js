import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
                JobTitle : "Front end - Web developer",
                APropos : "As an ambitious Junior Web Developer, I'm passionate about development and always inspired by the new opportunities it offers. My experience combined with my ingenuity drives me to create innovative solutions tailored to meet specific customer needs.",
                HeroContact : "Get in touch",
                ModalFermer : "Close",
                Competences : "My skills",
                TitreProjet : "My professional and personal projects",
                Client : "Client",
                Personnel : "Personal",
                ContactText : "If you have any questions about my projects, skills or any other topic related to web development, please don't hesitate to contact me. I'm always open to new opportunities for collaboration, whether for a short-term project or a longer-term collaboration.",
                Ville : "Quebec City, QC",
                ContactNom : "Last name - First name",
                ContactEmail : "Email",
                ContactTelephone : "Phone - Optional",
                ContactEnvoyer : "Send",
                HeaderApropos : "About",
                HeaderProjets : "Projects",
                HeaderContact : "Contact",
                Langue : "Language",
                Francais : "French",
                Anglais : "English"
        },
      },
      fr: {
        translation: {         
                JobTitle : "Developpeur web - Front end",
                APropos : "En tant que Développeur Web Junior ambitieux, je suis passionné par le développement et toujours inspiré par les nouvelles opportunités qu'il offre. Mon expérience combinée à mon ingéniosité me pousse à créer des solutions innovantes sur mesure pour répondre aux besoins spécifiques des clients.",
                HeroContact : "Me contacter",
                ModalFermer : "Fermer",
                Competences : "Mes compétences",
                TitreProjet : "Mes projets professionnels et personnels",
                Client : "Client",
                Personnel : "Personnel",
                ContactText : "Si vous avez des questions concernant mes projets, compétences ou tout autre sujet lié au développement web, n'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités de collaboration, que ce soit pour un projet à court terme ou une collaboration à plus long terme.",
                Ville : "Ville de Québec, QC",
                ContactNom : "Nom - Prénom",
                ContactEmail : "Courriel",
                ContactTelephone : "Téléphone - Optionnel",
                ContactEnvoyer : "Envoyer",
                HeaderApropos : "A propos",
                HeaderProjets : "Projets",
                HeaderContact : "Contact",
                Langue : "Langue",
                Francais : "Francais",
                Anglais : "Anglais"
        },
      },
    },
  });

export default i18n;