import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaInstagram, FaSchool } from 'react-icons/fa';
import they_worked_with_me from '../img/worked.webp';

const About = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  // Bloque le scroll quand l'image est agrandie
  useEffect(() => {
    if (isImageExpanded) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isImageExpanded]);

  const acc = [
    { value: '2+', label: 'Years of Experience' },
    { value: '8+', label: 'Successful Projects' },
    { value: '8+', label: 'Happy Clients' }
  ];

  const career = [
    { value: '4+', label: 'Years of Studies' },
    { value: '3', label: 'Different Jobs'},
    { value: '3', label: 'Years as Social Manager'},
    { value: '500+', label: 'Persons at my events'},
    { value: '800+', label: 'Followers on social media'},
    { value: '1', label: 'Year as president'}
  ];

  const usefulLinks = [
    { 
      url: "https://www.ena.ca/ena/english", 
      text: "Collège Édouard-Montpetit English | Cégep Édouard-Montpetit",
      icon: <FaSchool className="text-blue-500" />
    },
    { 
      url: "https://www.instagram.com/cve.ena/", 
      text: "Instagram (@cve.ena)",
      icon: <FaInstagram className="text-pink-500" />
    },
    { 
      url: "https://www.instagram.com/la_garaye_fest/", 
      text: "Instagram (@la_garaye_fest)",
      icon: <FaInstagram className="text-pink-500" />
    },
    { 
      url: "https://www.instagram.com/lcoin_mtl/", 
      text: "Instagram (@lcoin_mtl)",
      icon: <FaInstagram className="text-pink-500" />
    },
    { 
      url: "https://www.instagram.com/lamarockinerie_mtl/", 
      text: "Instagram (@lamarockinerie_mtl)",
      icon: <FaInstagram className="text-pink-500" />
    }
  ];

  return (
    <div className="bg-gray-900 py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20">
        
        {/* About Me Section */}
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About me
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200">
              My name is Sam PAROT. I'm an apprentice graphic designer based in Montréal.
            </p>
          </div>

          <div className="space-y-10">
            <h2 className="text-2xl font-semibold text-white">Here is my story:</h2>
            
            <div className="space-y-8">
              <p className="text-lg leading-8 text-gray-300">
                Having always wanted to travel, I left my French countryside to go to Montréal. Now, I am a student in aeronautical design at the Ecole Nationale d'aérotechnique. In addition to my studies, I am the president of the student association at this school, for which I was also the graphic designer and social manager for 2 years.
              </p>
              
              <p className="text-lg leading-8 text-gray-300">
                Passionate about design, I learn through many projects. I have had the opportunity to create t-shirts and hoodies, numerous posters, and even keychains. All guided by passion.
              </p>
              
              <p className="text-lg leading-8 text-gray-300">
                My next objective is to study design and winning experience. I would love to learn more about communication and work in some events.
              </p>
              
              <p className="text-lg leading-8 text-gray-300">
                Currently, I am the social manager of L'Coin, a gaming space in Montréal, and also of La Marockinerie, a venue for evening events in Montréal.
              </p>
              
              <p className="text-lg leading-8 text-gray-300">
                Always in search of new experiences and with a thirst for learning, I would be delighted to collaborate with you!
              </p>
            </div>
          </div>
        </div>

        {/* Accomplishments Section */}
        <div className="space-y-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My accomplishments
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {acc.map((stat, index) => (
                <div key={index} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                  <dt className="text-3xl font-semibold leading-7 text-white">{stat.value}</dt>
                  <dd className="text-base leading-6 text-gray-300">{stat.label}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Section */}
        <div className="space-y-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My career
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {career.map((stat, index) => (
                <div key={index} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                  <dt className="text-3xl font-semibold leading-7 text-white">{stat.value}</dt>
                  <dd className="text-base leading-6 text-gray-300">{stat.label}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* They Trusted Me Section */}
        <div className="space-y-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              They trusted me
            </h2>
            
            <motion.div 
              className="mt-12 rounded-lg overflow-hidden cursor-zoom-in"
              onClick={() => setIsImageExpanded(true)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img 
                src={they_worked_with_me} 
                alt="Companies and clients I've worked with" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="space-y-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Some useful links
            </h2>
            
            <div className="mt-12 space-y-6">
              {usefulLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="text-2xl">
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-white group-hover:text-indigo-300 transition-colors duration-200">
                      {link.text}
                    </p>
                  </div>
                  <FiExternalLink className="text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay plein écran avec animation */}
      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex items-center justify-center p-0"
            onClick={() => setIsImageExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={they_worked_with_me} 
                alt="Companies and clients I've worked with (expanded)" 
                className="absolute inset-0 w-full h-full object-contain p-4"
              />
              
              <motion.button 
                className="absolute top-6 right-6 text-white text-4xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
                onClick={() => setIsImageExpanded(false)}
                whileHover={{ scale: 1.1 }}
                aria-label="Close image"
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;