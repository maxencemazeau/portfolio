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
                ContactSujet : "Subject",
                ContactEnvoyer : "Send",
                HeaderApropos : "About",
                HeaderProjets : "Projects",
                HeaderContact : "Contact",
                Langue : "Language",
                Francais : "French",
                Anglais : "English",
                TitreProjet2 : "Hestenn showcase website",
                DescriptionProjet1 : "Extension of the Allaitement website with live chat, activity registration and email automation. Realized in a team of 3 developers.",
                DescriptionProjet2 : "Creation and integration of a template for a one-page showcase site for a company.",
                TitreProjet3 :"Personal finance website",
                DescriptionProjet3: "Creation of a Saas type website to help people manage their daily life finance more easily. This site is in Work In Progress state, features might not be working.",
                Footer : "All right reserved.",
                Ouvrir : "Open",
                Fermer : "Close",
                AlertTitre : "Email sent",
                AlertMessage : "Thank you for your email. I will get back to you as soon as possible."
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
                ContactSujet : "Sujet",
                ContactEnvoyer : "Envoyer",
                HeaderApropos : "À propos",
                HeaderProjets : "Projets",
                HeaderContact : "Contact",
                Langue : "Langue",
                Francais : "Francais",
                Anglais : "Anglais",
                DescriptionProjet1 : "Extension du site web d'Allaitement avec mise en place d'un chat live, d'inscription à des activités et automatisations d'emails. Réalisé dans une équipe de 3 développeurs.",
                TitreProjet2 : "Site vitrine Hestenn",
                DescriptionProjet2 : "Création et intégration de template pour un site vitrine one page pour entreprise.",
                TitreProjet3 :"Site de finance personel",
                DescriptionProjet3: "Création d'un site de type Saas pour aider les particuliers à gérer leur finance de tous les jours le plus simplement possible. Le site est en construction, les fonctionnalitées peuvent ne pas fonctionner.",
                Footer : "Tous droits réservés.",
                Ouvrir : "Ouvrir",
                Fermer : "Fermer",
                AlertTitre : "Courriel envoyé",
                AlertMessage : "Merci pour votre courriel. Je vous répondrais dans les plus bref délais."
        },
      },
    },
  });

export default i18n;