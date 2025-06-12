import { Link } from "react-router-dom";

export default function Navbar() {

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
            <Link to="/" className="flex px-6 py-2 hover:text-black dark:hover:text-gray-300">Home</Link>
            <Link to="/about" className="flex px-6 py-2 hover:text-black dark:hover:text-gray-300">About me</Link>
            <Link to="/resume" className="flex px-6 py-2 hover:text-black dark:hover:text-gray-300">Resume</Link>
            <Link to="/projects" className="flex px-6 py-2 hover:text-black dark:hover:text-gray-300">Projects</Link>
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