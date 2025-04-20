import React, { useState } from 'react';

const Resume = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="bg-gray-800 py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">

        {/* Titre principal */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My Résumé
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-200">
            Here's a quick overview of my journey and skillset.
          </p>
        </div>

        {/* Formations */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Education</h2>
          <ul className="space-y-6">
            <li className="border-l border-white/10 pl-6">
              <p className="text-xl text-white font-semibold">2023 – Present</p>
              <p className="text-gray-300">École Nationale d’aérotechnique – Aeronautical Design</p>
            </li>
          </ul>
        </div>

        {/* Expériences professionnelles */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Experience</h2>
          <ul className="space-y-6">
            <li className="border-l border-white/10 pl-6">
              <p className="text-xl text-white font-semibold">2022 – Present</p>
              <p className="text-gray-300">Social Media Manager – L’Coin / La Marockinerie</p>
              <p className="text-gray-400">Managed visuals, social presence, and events.</p>
            </li>
          </ul>
        </div>

        {/* Compétences (skills) */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Skills</h2>
          <div className="flex flex-row items-start gap-4 border-4 border-black p-6 rounded-lg">
  {/* Software */}
  <div>
    <h5
      onClick={() => toggleSection('software')}
      className="cursor-pointer text-xl font-semibold text-indigo-300 hover:underline"
    >
      Software
    </h5>
    {visibleSection === 'software' && (
      <div className="flex flex-row items-start gap-4 mt-2 text-gray-300">
        <p>Adobe Illustrator</p>
        <p>Adobe Lightroom</p>
        <p>Notion</p>
      </div>
    )}
  </div>

  {/* Expertise */}
  <div>
    <h5
      onClick={() => toggleSection('expertise')}
      className="cursor-pointer text-xl font-semibold text-indigo-300 hover:underline"
    >
      Expertise
    </h5>
    {visibleSection === 'expertise' && (
      <div className="flex flex-row items-start gap-4 mt-2 text-gray-300">
        <p>Logo Design</p>
        <p>Branding</p>
        <p>Teamwork</p>
      </div>
    )}
  </div>

  {/* Language */}
  <div>
    <h5
      onClick={() => toggleSection('language')}
      className="cursor-pointer text-xl font-semibold text-indigo-300 hover:underline"
    >
      Language
    </h5>
    {visibleSection === 'language' && (
      <div className="flex flex-row items-start gap-4 mt-2 text-gray-300">
        <p>French: Native</p>
        <p>English: Advanced</p>
      </div>
    )}
  </div>
</div>
</div>
</div>
    </div>
  );
};

export default Resume;
