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
import { Link, useLocation } from "react-router-dom";

import sam_logo from "../img/sinj.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    { name: "About me", href: "/about", current: location.pathname === "/about" },
    { name: "Projects", href: "/projects", current: location.pathname.startsWith("/projects") },
  ];

  const emailAddress = "mailto:sam.parotech@gmail.com";
  const calendarLink =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LNlHXLcvGbZW4TmGZH0xQFQeslBokQ4awx0lWJBnqFgRo55wa8dK9OQN-NKmURwXrOpC-KChj";

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Bouton menu pour mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          {/* Logo et Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                src={sam_logo}
                alt="Sam's Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            {/* Email Me */}
            <a
              href={emailAddress}
              className="ml-3 flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Email Me
            </a>
            {/* Book a Call */}
            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <CalendarIcon className="h-5 w-5" />
              Book a Call
            </a>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}