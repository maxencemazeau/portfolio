import React, { useState } from 'react';
//import { getCurrentLanguage ,setLanguage, t } from "../component/Translation" 
import { useTranslation } from "react-i18next";

const Header = ({ handleHeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    handleHeight(!isExpanded);
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById('heroSection');
    heroSection.scrollIntoView({ behavior : 'smooth' });
  }

  const scrollToProjet = () => {
    const projet = document.getElementById('nombreProjet');
    projet.scrollIntoView({ behavior : 'smooth' });
  }

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    contact.scrollIntoView({ behavior : 'smooth' });
}

// const [currentLang, setCurrentLang] = useState(getCurrentLanguage());

//   const changeFrancais = () => {
//     setLanguage('fr');
//     setCurrentLang('fr'); // Update the language state
//   };

//   const changeAnglais = () => {
//     setLanguage('en');
//     setCurrentLang('en'); // Update the language state
//   };

  return (
    <div className="flex flex-col h-screen border-e bg-white">
      <div className="px-4 py-6">
        <button
          className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 lg:hidden"
          onClick={toggleExpand}
        >
          {isExpanded ? 'Close Menu' : 'Open Menu'}
        </button>

        <ul
          className={`mt-6 space-y-1 ${
            isExpanded ? 'block' : 'hidden lg:block'
          }`}
        >
          <li>
            <button
              onClick={scrollToHero}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              {t('HeaderApropos')}
            </button>
          </li>

          <li>
            <button
              onClick={scrollToProjet}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              {t('HeaderProjets')}
            </button>
          </li>

          <li>
            <button
              onClick={scrollToContact}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              {t('HeaderContact')}
            </button>
          </li>

          <li>
          <select className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              defaultValue={i18n.language} onChange={onChangeLang}>
                  <option value='fr'>
                    Francais
                  </option>
                  <option value='en'>
                    Anglais
                  </option>
              </select>
             

              {/* <ul className="mt-2 space-y-1 px-4">
                <li>
                  <button
                    onClick={changeFrancais}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    {t('Francais')}
                  </button>
                </li>

                <li>
                  <button
                    onClick={changeAnglais}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    {t('Anglais')}
                  </button>
                </li>
              </ul> */}
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
