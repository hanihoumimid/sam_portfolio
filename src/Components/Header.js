import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-30 flex items-center w-full h-24 sm:h-32 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container flex items-center justify-between px-6 mx-auto">
        {/* Groupe Email + Book a call (gauche) */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Email */}
          <a 
            href="mailto:sam.parotech@gmail.com" 
            className="group relative text-gray-800 dark:text-gray-300 transition-all duration-300"
          >
            <div className="flex items-center">
              <svg width="25" height="25" viewBox="0 0 1792 1792" fill="currentColor" className="shrink-0">
                <path d="M1664 1504v-768q-32 36-69 66-268 206-426 338-51 43-83 67t-86.5 48.5-102.5 24.5h-2q-48 0-102.5-24.5t-86.5-48.5-83-67q-158-132-426-338-37-30-69-66v768q0 13 9.5 22.5t22.5 9.5h1472q13 0 22.5 9.5t9.5 22.5zm0-1051v-24.5l-.5-13-3-12.5-5.5-9-9-7.5-14-2.5h-1472q-13 0-22.5 9.5t-9.5 22.5q0 168 147 284 193 152 401 317 6 5 35 29.5t46 37.5 44.5 31.5 50.5 27.5 43 9h2q20 0 43-9t50.5-27.5 44.5-31.5 46-37.5 35-29.5q208-165 401-317 54-43 100.5-115.5t46.5-131.5zm128-37v1088q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1472q66 0 113 47t47 113z"/>
              </svg>
              <span className="ml-3 text-xs sm:text-sm relative">
                sam.parotech@gmail.com
                <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </div>
          </a>

          {/* Book a call */}
          <a 
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LNlHXLcvGbZW4TmGZH0xQFQeslBokQ4awx0lWJBnqFgRo55wa8dK9OQN-NKmURwXrOpC-KChj" 
            className="group relative text-gray-800 dark:text-gray-300 transition-all duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="flex items-center">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-7-7h5v5h-5z"/>
              </svg>
              <span className="ml-3 text-xs sm:text-sm relative">
                Book a call !
                <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </div>
          </a>
        </div>

        {/* Navigation */}
        <div className="flex items-center">
          {/* Menu desktop */}
          <nav className="hidden sm:flex items-center text-lg text-gray-800 dark:text-gray-300 font-sen">
            <Link to="/" className="relative px-6 py-2 group">
              Home
              <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/about" className="relative px-6 py-2 group">
              About me
              <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/resume" className="relative px-6 py-2 group">
              Resume
              <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/project" className="relative px-6 py-2 group">
              Project
              <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </nav>

          {/* Menu hamburger (droite) */}
          <div className="sm:hidden ml-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 dark:text-gray-300 hover:text-blue-500 focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

   {/* Menu mobile (droite) */}
   <div className={`fixed inset-0 z-40 ${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity" 
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Panneau du menu - Modifié ici */}
          <div 
            className={`fixed top-0 right-0 h-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } w-auto min-w-fit max-w-full`}
          >
            <nav className="flex flex-col p-4 mt-24 min-w-[200px]">
              <Link 
                to="/" 
                className="py-3 px-6 text-left text-white hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="py-3 px-6 text-left text-white hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                About me
              </Link>
              <Link 
                to="/resume" 
                className="py-3 px-6 text-left text-white hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
              <Link 
                to="/project" 
                className="py-3 px-6 text-left text-white hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                Project
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;