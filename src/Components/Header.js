function Header() {
  return (
    <header className="z-30 flex items-center w-full h-24 sm:h-32 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container flex items-center justify-between px-6 mx-auto">
        {/* Groupe Email + Book a call */}
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
          <nav className="items-center hidden text-lg text-gray-800 dark:text-gray-300 font-sen lg:flex">
            <a href="/" className="relative px-6 py-2 group">
              Home
              <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a href="/about" className="relative px-6 py-2 group">
              About me
              <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a href="/resume" className="relative px-6 py-2 group">
              Resume
              <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            <a href="/project" className="relative px-6 py-2 group">
              Project
              <span className="absolute bottom-1 left-6 right-6 h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
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

export default Header;