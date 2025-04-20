import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import { href, Link, useLocation } from "react-router-dom";

import sam_logo from "../assets/sinj.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    { name: "About me", href: "/about", current: location.pathname === "/about" },
    { name: "Projects", href: "/project", current: location.pathname.startsWith("/projects") },
    { name: "Resume", href: "/resume", current: location.pathname === "/resume"}
  ];

  const emailAddress = "mailto:sam.parotech@gmail.com";
  const calendarLink =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LNlHXLcvGbZW4TmGZH0xQFQeslBokQ4awx0lWJBnqFgRo55wa8dK9OQN-NKmURwXrOpC-KChj";

  return (
    <header className="z-30 flex items-center w-full h-24 sm:h-32">
    <div className="container flex items-center justify-between px-6 mx-auto">
      <div className="flex items-center text-3xl font-black text-gray-800 uppercase dark:text-white">
        <svg width="25" height="25" viewBox="0 0 1792 1792" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5 9.5t9.5 22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"></path>
        </svg>
        <span className="mt-1 ml-3 text-xs">sam.parot@email.com</span>
      </div>
      <div className="flex items-center">
        <nav className="items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex">
          <a href="/" className="flex px-6 py-2 hover:text-black dark:hover:text-gray-300">Home</a>
          <a href="/about" className="flex px-6 py-2 hover:text-black dark:hover:text-gray-300">About me</a>
          <a href="/resume" className="flex px-6 py-2 hover:text-black dark:hover:text-gray-300">Resume</a>
          <a href="/project" className="flex px-6 py-2 hover:text-black dark:hover:text-gray-300">Project</a>
        </nav>
        <button className="flex flex-col ml-4 lg:hidden">
          <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
          <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
          <span className="w-6 h-1 mb-1 bg-gray-800 dark:bg-white"></span>
        </button>
      </div>
    </div>
  </header>
  );
}


import React, { useState } from 'react';
import profilePhoto from '../assets/sam_pp.webp'; // Chemin vers votre photo

const Resume = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = (section) => {
    setVisibleSection((prevSection) => (prevSection === section ? null : section));
  };

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
      <div className="skills">
        <h5 onClick={() => toggleSection('software')} className="cursor-pointer">Software</h5>
        {visibleSection === 'software' && (
          <div id="Software">
            <p>Adobe Illustrator</p>
            <p>Adobe Lightroom</p>
            <p>Notion</p>
          </div>
        )}
        <h5 onClick={() => toggleSection('expertise')} className="cursor-pointer">Expertise</h5>
        {visibleSection === 'expertise' && (
          <div id="Expertise">
            <p>Logo Design</p>
            <p>Branding</p>
            <p>Teamwork</p>
          </div>
        )}
        <h5 onClick={() => toggleSection('language')} className="cursor-pointer">Language</h5>
        {visibleSection === 'language' && (
          <div id="Lang">
            <p>French: native</p>
            <p>English: Advanced</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;