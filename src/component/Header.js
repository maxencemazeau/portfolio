import React, { useState } from 'react';

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
              A propos
            </button>
          </li>

          <li>
            <button
              onClick={scrollToProjet}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              Projets
            </button>
          </li>

          <li>
            <button
              onClick={scrollToContact}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700"
            >
              Contact
            </button>
          </li>

         
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
