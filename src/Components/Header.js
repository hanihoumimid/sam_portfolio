import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import sam_logo from '../assets/sinj.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/About' },
    { name: 'Projects', href: '/Projects' },
    { name: 'Resume', href: '/Resume' },
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.header 
      className="bg-white dark:bg-gray-800 fixed w-full z-50 top-0 shadow-sm"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sam PAROT</span>
              <img className="h-8 w-auto" src={sam_logo} alt="Logo" />
            </Link>
          </motion.div>
          
          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="mailto:sam.parotech@gmail.com"
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              sam.parotech@gmail.com
            </motion.a>
          </div>
        </div>
        
        <div className="flex lg:hidden">
          <motion.button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"}
              />
            </svg>
          </motion.button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              variants={linkVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.href}
                className={`text-sm font-semibold leading-6 ${
                  location.pathname === item.href
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-900 dark:text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LNlHXLcvGbZW4TmGZH0xQFQeslBokQ4awx0lWJBnqFgRo55wa8dK9OQN-NKmURwXrOpC-KChj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call <span aria-hidden="true">→</span>
          </motion.a>
        </div>
      </nav>

      {/* Menu mobile */}
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  location.pathname === item.href
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-900 dark:text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          {/* Contact Info - Mobile */}
          <div className="px-3 py-2">
            <motion.a
              href="mailto:sam.parotech@gmail.com"
              className="block text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              whileTap={{ scale: 0.95 }}
            >
              sam.parotech@gmail.com
            </motion.a>
            <motion.a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LNlHXLcvGbZW4TmGZH0xQFQeslBokQ4awx0lWJBnqFgRo55wa8dK9OQN-NKmURwXrOpC-KChj"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm font-semibold text-indigo-600 dark:text-indigo-400"
              whileTap={{ scale: 0.95 }}
            >
              Book a Call →
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;