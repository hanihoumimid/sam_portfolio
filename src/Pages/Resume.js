import React, { useState } from 'react';
import pp from '../assets/sam_pp.webp';

const Resume = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection((prev) => (prev === section ? null : section));
  };

  const skillsData = {
    software: [
      { name: 'Adobe Illustrator', level: 'Advanced' },
      { name: 'Adobe Premier Rush', level: 'Intermediate' },
      { name: 'Figma', level: 'Intermediate' },
      { name: 'Adobe Lightroom', level: 'Intermediate' },
      { name: 'Adobe Photoshop', level: 'Intermediate' },
      { name: 'Notion', level: 'Intermediate' },
      { name: 'Adobe Indesign', level: 'Intermediate' },
      { name: 'Adobe Express', level: 'Advanced' },
    ],
    expertise: [
      { name: 'Logo Design', level: 'Intermediate' },
      { name: 'Social Media Graphics', level: 'Advanced' },
      { name: 'Branding', level: 'Advanced' },
      { name: 'Print Design', level: 'Intermediate' },
      { name: 'Event Planning', level: 'Advanced' },
      { name: 'Leadership' },
      { name: 'Teamwork' },
      { name: 'Attention to detail' },
    ],
    languages: [
      { language: 'French', level: 'Native' },
      { language: 'English', level: 'Advanced' },
    ]
  };

  const experiences = [
    {
      title: "President",
      date: "06/2024 - 06/2025",
      company: "Conseil de Vie Étudiante",
      location: "Saint-Hubert, Canada",
      points: [
        "Art direction and visual content creation",
        "Social media management and strategy",
        "Event planning and coordination"
      ]
    },
    {
      title: "Content Creator",
      date: "04/2025 - 05/2025",
      company: "Fondation Edouard-Montpetit",
      location: "Saint-Hubert, Canada",
      points: [
        "Visual content creation and branding",
        "Social media strategy implementation",
        "Video production and editing"
      ]
    },
    {
      title: "Graphic Designer",
      date: "01/2025 - 05/2025",
      company: "ÉNA",
      location: "Saint-Hubert, Canada",
      points: [
        "Merchandise design and production",
        "Poster and banner creation",
        "Brand consistency management"
      ]
    },
    {
      title: "Workshop Technician",
      date: "01/2024 - 03/2025",
      company: "Dicsa",
      location: "Saint-Hubert, Canada",
      points: [
        "Assembly line operations",
        "3D modeling support",
        "Production process optimization"
      ]
    },
    {
      title: "Social Media Manager",
      date: "06/2022 - 06/2024",
      company: "Conseil de Vie Étudiante",
      location: "Saint-Hubert, Canada",
      points: [
        "Visual identity development",
        "Social media content creation",
        "Community engagement strategies"
      ]
    },
    {
      title: "3D Design Assistant",
      date: "06/2022 - 08/2022",
      company: "Parotech",
      location: "Langres, France",
      points: [
        "3D modeling and prototyping",
        "Workshop operations support",
        "Technical documentation"
      ]
    },
    {
      title: "Design & Social Media Manager",
      date: "06/2021 - 08/2021",
      company: "Parotech",
      location: "Langres, France",
      points: [
        "Website design and maintenance",
        "Social media content creation",
        "Brand identity development"
      ]
    },
    {
      title: "Retail Associate",
      date: "10/2020 - 12/2020",
      company: "Leclerc",
      location: "Langres, France",
      points: [
        "Inventory management and restocking",
        "Customer service and support",
        "Store maintenance operations"
      ]
    }
  ];

  return (
    <div className="bg-gray-800 py-12 sm:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Titre principal */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            My Resume
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

        {/* Professional Experience */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-indigo-400 pl-3 space-y-1.5">
                <div className="flex justify-between items-start align-items-center">
                  <h3 className="text-base font-semibold text-indigo-300">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.date}</p>
                </div>
                <p className="text-xs text-gray-400">{exp.company} · {exp.location}</p>
                <ul className="list-square pl-4 text-xs text-gray-400 space-y-0.5">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">My Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Onglet Software */}
            <div className="space-y-4">
              <h3
                onClick={() => toggleSection('software')}
                className="cursor-pointer text-lg font-semibold text-indigo-300 border-b border-indigo-400 pb-2 hover:bg-gray-700/30 p-2 rounded-lg transition-colors"
              >
                Software
              </h3>
              {visibleSection === 'software' && (
                <div className="flex flex-wrap gap-4">
                  {skillsData.software.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/30">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className={`px-2 py-1 text-xs rounded-full
                        ${skill.level === 'Advanced' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Onglet Expertise */}
            <div className="space-y-4">
              <h3
                onClick={() => toggleSection('expertise')}
                className="cursor-pointer text-lg font-semibold text-indigo-300 border-b border-indigo-400 pb-2 hover:bg-gray-700/30 p-2 rounded-lg transition-colors"
              >
                Expertise
              </h3>
              {visibleSection === 'expertise' && (
                <div className="flex flex-wrap gap-4">
                  {skillsData.expertise.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/30">
                      <span className="text-gray-300">{skill.name}</span>
                      {skill.level && (
                        <span className={`px-2 py-1 text-xs rounded-full
                          ${skill.level === 'Advanced' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Onglet Languages */}
            <div className="space-y-4">
              <h3
                onClick={() => toggleSection('languages')}
                className="cursor-pointer text-lg font-semibold text-indigo-300 border-b border-indigo-400 pb-2 hover:bg-gray-700/30 p-2 rounded-lg transition-colors"
              >
                Languages
              </h3>
              {visibleSection === 'languages' && (
                <div className="flex flex-wrap gap-4">
                  {skillsData.languages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700/30">
                      <span className="text-gray-300">{lang.language}</span>
                      <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
                        {lang.level}
                      </span>
                    </div>
                  ))}
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
