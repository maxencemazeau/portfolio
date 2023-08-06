import React, { useState } from 'react';
import { getCurrentLanguage ,setLanguage, t } from "../component/Translation" 

const Header = ({ handleHeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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

const [currentLang, setCurrentLang] = useState(getCurrentLanguage());

  const changeFrancais = () => {
    setLanguage('fr');
    setCurrentLang('fr'); // Update the language state
  };

  const changeAnglais = () => {
    setLanguage('en');
    setCurrentLang('en'); // Update the language state
  };

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
            <details className="group">
              <summary
                className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="text-sm font-medium">{t('Langue')}</span>

                <span className="transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
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
              </ul>
            </details>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
