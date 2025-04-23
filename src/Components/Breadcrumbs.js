// src/components/Breadcrumbs.js
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap dark:bg-custom-black">
      <Link to="/" className="text-gray-600 dark:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <div key={name} className="flex items-center">
            <span className="mx-5 text-gray-500 dark:text-gray-300">
              /
            </span>
            {isLast ? (
              <span className="text-blue-600 dark:text-blue-400">
                {name}
              </span>
            ) : (
              <Link to={routeTo} className="text-gray-600 dark:text-gray-200 hover:underline">
                {name}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;