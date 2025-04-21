import React, { useState } from 'react';
import pp from '../assets/sam_pp.webp'
// import fond from '../assets/etoiles.webp';


// style={{
//   backgroundImage: `url(${fond})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// }}

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

        {/*Introduction*/}

        <div className="flex flex-row items-start gap-10 px-6 py-4">
          <img 
            src={pp} 
            alt="Sam's pic" 
            className="border border-black rounded-lg w-60 h-60 object-cover" 
          />
          
          <p className="text-xl text-white font-semibold leading-relaxed">
            Hi, I’m Sam — currently a student at the National Aeronautical School and an apprentice designer.<br />
            I’ve been studying aircraft for the past three years and am passionate about design. I aspire to become a designer in the future.<br />
            Always on the lookout for new adventures — whether it’s traveling or engaging in exciting job opportunities — I bring motivation and dedication to everything I do.<br />
            I’m a French native, fluent in English, and through my various experiences, I’ve developed strong teamwork skills, active listening abilities, and effective communication.
          </p>

          <ul className="space-y-6">
            <p className="text-white">Contact me on :</p>
            <li  className="border-l border-white/10 pl-6 text-white">
              <a href='mailto:sam.parotech@gmail.com' alt="mail sam">sam.parotech@gmail.com</a>
            </li>
            <li  className="border-l border-white/10 pl-6 text-white">
              <a href="tel:+33 7 81 87 29 38 " alt="french number">+33 7 81 87 29 38 </a>
            </li>
            <li  className="border-l border-white/10 pl-6 text-white">
              <a href="tel:+1 (450) 626-8577" alt="canadian number">+1 (450) 626-8577 </a>
            </li>
          </ul>
        </div>



        {/*About me*/}

        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About me</h2>
          <ul className="space-y-6">
            <li className="border-l border-white/10 pl-6">
              <p className="text-gray-300">

              </p>
            </li>
          </ul>
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
