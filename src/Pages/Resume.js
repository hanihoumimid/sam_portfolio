import React from 'react';
import profilePhoto from '../assets/sam_pp.webp'; // Chemin vers votre photo

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header avec photo */}
        <div className="bg-indigo-700 p-8 text-white relative">
          {/* Photo de profil */}
          <div className="absolute right-8 top-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img 
              src={profilePhoto} 
              alt="Sam PAROT"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Texte du header */}
          <div className="pr-28 sm:pr-36"> {/* Espace pour la photo */}
            <h1 className="text-3xl sm:text-4xl font-bold">Sam PAROT</h1>
            <p className="text-lg sm:text-xl mt-2 text-indigo-100">Graphic Designer & Social Media Manager</p>
            
            {/* Coordonnées */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              <span className="flex items-center text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (123) 456-7890
              </span>
              <span className="flex items-center text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sam.parot@email.com
              </span>
              <span className="flex items-center text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Montréal, Canada
              </span>
            </div>
          </div>
        </div>

               {/* Main Content */}
               <div className="p-8">
          {/* Experience Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2 mb-4">Professional Experience</h2>
            
            <div className="mb-6">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Social Media Manager</h3>
                <span className="text-indigo-600">2021 - Present</span>
              </div>
              <p className="text-gray-600 italic">L'Coin, Montréal</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Managed all social media platforms (Instagram, Facebook, Twitter)</li>
                <li>Increased followers by 150% in 6 months</li>
                <li>Created engaging visual content and marketing campaigns</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Graphic Designer</h3>
                <span className="text-indigo-600">2020 - 2021</span>
              </div>
              <p className="text-gray-600 italic">Student Association, ÉNA</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Designed posters, logos, and promotional materials</li>
                <li>Created merchandise designs (t-shirts, hoodies)</li>
                <li>Collaborated with event teams for visual identity</li>
              </ul>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2 mb-4">Education</h2>
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">Aeronautical Design</h3>
              <span className="text-indigo-600">2019 - Present</span>
            </div>
            <p className="text-gray-600 italic">École Nationale d'Aérotechnique, Montréal</p>
          </section>

          {/* Skills Section */}
          <section className="mb-10 adobe">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2 mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Design</h3>
                <ul className="mt-1 space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Adobe Photoshop
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Adobe Illustrator
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Figma
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Social Media</h3>
                <ul className="mt-1 space-y-1">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Content Strategy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Community Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                    Analytics
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2 mb-4">Key Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">La Garaye Festival Branding</h3>
                <p className="text-gray-600">Created complete visual identity for annual student festival</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">CVE Merchandise Line</h3>
                <p className="text-gray-600">Designed and launched student association merchandise</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;