import React, { useState } from 'react';
import pp from '../assets/sam_pp.webp';
import { motion, AnimatePresence } from 'framer-motion';

const Resume = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

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
    <motion.div 
      className="bg-gray-800 py-12 sm:py-24 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Titre principal */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            variants={itemVariants}
          >
            My Resume
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg leading-8 text-gray-200 sm:text-xl"
            variants={itemVariants}
          >
            Here's a quick overview of my journey and skillset.
          </motion.p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          className="flex flex-col md:flex-row items-start gap-8 px-4 py-6"
          variants={itemVariants}
        >
          <motion.div 
            className="w-full md:w-auto flex flex-col items-center gap-6"
            variants={itemVariants}
          >
            <motion.img
              src={pp}
              alt="Sam's pic"
              className="border border-black rounded-lg w-48 h-48 sm:w-60 sm:h-60 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            <motion.ul 
              className="space-y-4 w-full md:w-48 lg:w-60"
              variants={itemVariants}
            >
              <motion.p 
                className="text-white text-center md:text-left"
                variants={itemVariants}
              >
                Contact me on :
              </motion.p>
              {[
                { href: 'mailto:sam.parotech@gmail.com', text: 'sam.parotech@gmail.com' },
                { href: 'tel:+33 7 81 87 29 38', text: '+33 7 81 87 29 38' },
                { href: 'tel:+1 (450) 626-8577', text: '+1 (450) 626-8577' }
              ].map((contact, index) => (
                <motion.li 
                  key={index}
                  className="border-t border-white/10 pt-4 text-white text-center md:text-left"
                  variants={itemVariants}
                >
                  <motion.a 
                    href={contact.href} 
                    className="hover:text-indigo-300 transition-colors"
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {contact.text}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.p 
            className="text-lg text-white font-medium leading-relaxed flex-1"
            variants={itemVariants}
          >
            Hi, I'm Sam — currently a student at the National Aeronautical School and an apprentice designer.<br /><br />
            I've been studying aircraft for the past three years and am passionate about design. I aspire to become a designer in the future.<br /><br />
            Always on the lookout for new adventures — whether it's traveling or engaging in exciting job opportunities — I bring motivation and dedication to everything I do.<br /><br />
            I'm a French native, fluent in English, and through my various experiences, I've developed strong teamwork skills, active listening abilities, and effective communication.
          </motion.p>
        </motion.div>

        {/* About me */}
        <motion.div 
          className="space-y-12 px-4 sm:px-0"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-2xl font-bold text-white sm:text-3xl"
            variants={itemVariants}
          >
            About me
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={itemVariants}
          >
            {['Design', 'Sports', 'Musical events', 'Technologies', 'Travel'].map((interest, index) => (
              <motion.div
                key={interest}
                className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-3 h-3 bg-indigo-300 flex-shrink-0" />
                <span className="text-lg text-white font-medium">{interest}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Professional Experience */}
        <motion.div 
          className="space-y-6"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-2xl font-bold text-white sm:text-3xl"
            variants={itemVariants}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="border-l-2 border-indigo-400 pl-3 space-y-1.5 pr-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="space-y-8"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-2xl font-bold text-white sm:text-3xl"
            variants={itemVariants}
          >
            My Skills
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={itemVariants}
          >
            {/* Onglet Software */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.h3
                onClick={() => toggleSection('software')}
                className={`cursor-pointer text-lg font-semibold text-indigo-300 border-b border-indigo-400 pb-2 p-2 rounded-t-lg transition-colors ${
                  visibleSection === 'software' ? 'bg-gray-700/30' : 'hover:bg-gray-700/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Software
              </motion.h3>
              <AnimatePresence>
                {visibleSection === 'software' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-2 p-3 bg-gray-700/10 rounded-b-lg">
                      {skillsData.software.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
                          whileHover={{ scale: 1.02, x: 10 }}
                        >
                          <span className="text-gray-300">{skill.name}</span>
                          <span className={`px-3 py-1 text-xs rounded-full ${
                            skill.level === 'Advanced' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          }`}>
                            {skill.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Onglet Expertise */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.h3
                onClick={() => toggleSection('expertise')}
                className={`cursor-pointer text-lg font-semibold text-indigo-300 border-b border-indigo-400 pb-2 p-2 rounded-t-lg transition-colors ${
                  visibleSection === 'expertise' ? 'bg-gray-700/30' : 'hover:bg-gray-700/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Expertise
              </motion.h3>
              <AnimatePresence>
                {visibleSection === 'expertise' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-2 p-3 bg-gray-700/10 rounded-b-lg">
                      {skillsData.expertise.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
                          whileHover={{ scale: 1.02, x: 10 }}
                        >
                          <span className="text-gray-300">{skill.name}</span>
                          {skill.level && (
                            <span className={`px-3 py-1 text-xs rounded-full ${
                              skill.level === 'Advanced' 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            }`}>
                              {skill.level}
                            </span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Onglet Languages */}
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <motion.h3
                onClick={() => toggleSection('languages')}
                className={`cursor-pointer text-lg font-semibold text-indigo-300 border-b border-indigo-400 pb-2 p-2 rounded-t-lg transition-colors ${
                  visibleSection === 'languages' ? 'bg-gray-700/30' : 'hover:bg-gray-700/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Languages
              </motion.h3>
              <AnimatePresence>
                {visibleSection === 'languages' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 gap-2 p-3 bg-gray-700/10 rounded-b-lg">
                      {skillsData.languages.map((lang, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-700/30 transition-colors"
                          whileHover={{ scale: 1.02, x: 10 }}
                        >
                          <span className="text-gray-300">{lang.language}</span>
                          <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                            {lang.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;
