import React, { useState } from 'react';
import pp from '../assets/sam_pp.webp';

const Resume = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="bg-gray-800 py-12 sm:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Titre principal */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            My Résumé
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-200 sm:text-xl">
            Here's a quick overview of my journey and skillset.
          </p>
        </div>

        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-start gap-8 px-4 py-6">
          <div className="w-full md:w-auto flex flex-col items-center gap-6">
            <img 
              src={pp} 
              alt="Sam's pic" 
              className="border border-black rounded-lg w-48 h-48 sm:w-60 sm:h-60 object-cover" 
            />
            
            <ul className="space-y-4 w-full md:w-48 lg:w-60">
              <p className="text-white text-center md:text-left">Contact me on :</p>
              <li className="border-t border-white/10 pt-4 text-white text-center md:text-left">
                <a href='mailto:sam.parotech@gmail.com' className="hover:text-indigo-300 transition-colors">
                  sam.parotech@gmail.com
                </a>
              </li>
              <li className="border-t border-white/10 pt-4 text-white text-center md:text-left">
                <a href="tel:+33 7 81 87 29 38" className="hover:text-indigo-300 transition-colors">
                  +33 7 81 87 29 38
                </a>
              </li>
              <li className="border-t border-white/10 pt-4 text-white text-center md:text-left">
                <a href="tel:+1 (450) 626-8577" className="hover:text-indigo-300 transition-colors">
                  +1 (450) 626-8577
                </a>
              </li>
            </ul>
          </div>

          <p className="text-lg text-white font-medium leading-relaxed flex-1">
            Hi, I’m Sam — currently a student at the National Aeronautical School and an apprentice designer.<br /><br />
            I’ve been studying aircraft for the past three years and am passionate about design. I aspire to become a designer in the future.<br /><br />
            Always on the lookout for new adventures — whether it’s traveling or engaging in exciting job opportunities — I bring motivation and dedication to everything I do.<br /><br />
            I’m a French native, fluent in English, and through my various experiences, I’ve developed strong teamwork skills, active listening abilities, and effective communication.
          </p>
        </div>


        
         {/* About me */}
         <div className="space-y-12 px-4 sm:px-0">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">About me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Design', 'Sports', 'Musical events', 'Technologies', 'Travel'].map((interest) => (
              <div 
                key={interest}
                className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <div className="w-3 h-3 bg-indigo-300 flex-shrink-0" />
                <span className="text-lg text-white font-medium">{interest}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Sections */}
{/* Professional Experience */}
<div className="space-y-6">
  <h2 className="text-2xl font-bold text-white sm:text-3xl">Experience</h2>
  <ul className="space-y-8">

    {/* President */}
    <li className="border-l-2 border-indigo-400 pl-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">06/2024 - 06/2025</p>
        <h3 className="text-xl text-indigo-300">President</h3>
        <p className="text-gray-300">Conseil de Vie Étudiante · Saint-Hubert, Canada</p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Art direction and visual content creation</li>
          <li>Social media management and strategy</li>
          <li>Event planning and coordination</li>
        </ul>
      </div>
    </li>

    {/* Content Creator */}
    <li className="border-l-2 border-indigo-400 pl-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">04/2025 - 05/2025</p>
        <h3 className="text-xl text-indigo-300">Content Creator</h3>
        <p className="text-gray-300">Fondation Edouard-Montpetit · Saint-Hubert, Canada</p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Visual content creation and branding</li>
          <li>Social media strategy implementation</li>
          <li>Video production and editing</li>
        </ul>
      </div>
    </li>

    {/* Graphic Designer */}
    <li className="border-l-2 border-indigo-400 pl-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">01/2025 - 05/2025</p>
        <h3 className="text-xl text-indigo-300">Graphic Designer</h3>
        <p className="text-gray-300">ÉNA · Saint-Hubert, Canada</p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Merchandise design and production</li>
          <li>Poster and banner creation</li>
          <li>Brand consistency management</li>
        </ul>
      </div>
    </li>

    {/* Dicsa Employee */}
    <li className="border-l-2 border-indigo-400 pl-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">01/2024 - 03/2025</p>
        <h3 className="text-xl text-indigo-300">Workshop Technician</h3>
        <p className="text-gray-300">Dicsa · Saint-Hubert, Canada</p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Assembly line operations</li>
          <li>3D modeling support</li>
          <li>Production process optimization</li>
        </ul>
      </div>
    </li>

    {/* Social Manager */}
    <li className="border-l-2 border-indigo-400 pl-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">06/2022 - 06/2024</p>
        <h3 className="text-xl text-indigo-300">Social Media Manager</h3>
        <p className="text-gray-300">Conseil de Vie Étudiante · Saint-Hubert, Canada</p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Visual identity development</li>
          <li>Social media content creation</li>
          <li>Community engagement strategies</li>
        </ul>
      </div>
    </li>

    {/* Parotech Employee */}
    <li className="border-l-2 border-indigo-400 pl-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">06/2022 - 08/2022</p>
        <h3 className="text-xl text-indigo-300">3D Design Assistant</h3>
        <p className="text-gray-300">Parotech · Langres, France</p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>3D modeling and prototyping</li>
          <li>Workshop operations support</li>
          <li>Technical documentation</li>
        </ul>
      </div>
    </li>

    {/* Parotech Design */}
    <li className="border-l-2 border-indigo-400 pl-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">06/2021 - 08/2021</p>
        <h3 className="text-xl text-indigo-300">Design & Social Media Manager</h3>
        <p className="text-gray-300">Parotech · Langres, France</p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Website design and maintenance</li>
          <li>Social media content creation</li>
          <li>Brand identity development</li>
        </ul>
      </div>
    </li>

    {/* Leclerc */}
    <li className="border-l-2 border-indigo-400 pl-4">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-white">10/2020 - 12/2020</p>
        <h3 className="text-xl text-indigo-300">Retail Associate</h3>
        <p className="text-gray-300">Leclerc · Langres, France</p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Inventory management and restocking</li>
          <li>Customer service and support</li>
          <li>Store maintenance operations</li>
        </ul>
      </div>
    </li>

  </ul>
</div>

          {/* Skills */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Skills</h2>
            <div className="flex flex-col gap-6 border-2 border-gray-700 p-4 rounded-lg sm:flex-row sm:flex-wrap">
              {/* Software */}
              <div className="flex-1 min-w-[200px]">
                <h5
                  onClick={() => toggleSection('software')}
                  className="cursor-pointer text-lg font-semibold text-indigo-300 hover:underline sm:text-xl"
                >
                  Software
                </h5>
                {visibleSection === 'software' && (
                  <div className="flex flex-col gap-2 mt-2 text-gray-300 sm:flex-row sm:flex-wrap">
                    <span className="px-2 py-1 bg-gray-700 rounded">Adobe Illustrator</span>
                    <span className="px-2 py-1 bg-gray-700 rounded">Adobe Lightroom</span>
                    <span className="px-2 py-1 bg-gray-700 rounded">Notion</span>
                  </div>
                )}
              </div>

              {/* Expertise */}
              <div className="flex-1 min-w-[200px]">
                <h5
                  onClick={() => toggleSection('expertise')}
                  className="cursor-pointer text-lg font-semibold text-indigo-300 hover:underline sm:text-xl"
                >
                  Expertise
                </h5>
                {visibleSection === 'expertise' && (
                  <div className="flex flex-col gap-2 mt-2 text-gray-300 sm:flex-row sm:flex-wrap">
                    <span className="px-2 py-1 bg-gray-700 rounded">Logo Design</span>
                    <span className="px-2 py-1 bg-gray-700 rounded">Branding</span>
                    <span className="px-2 py-1 bg-gray-700 rounded">Teamwork</span>
                  </div>
                )}
              </div>

              {/* Language */}
              <div className="flex-1 min-w-[200px]">
                <h5
                  onClick={() => toggleSection('language')}
                  className="cursor-pointer text-lg font-semibold text-indigo-300 hover:underline sm:text-xl"
                >
                  Language
                </h5>
                {visibleSection === 'language' && (
                  <div className="flex flex-col gap-2 mt-2 text-gray-300">
                    <span className="px-2 py-1 bg-gray-700 rounded">French: Native</span>
                    <span className="px-2 py-1 bg-gray-700 rounded">English: Advanced</span>
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