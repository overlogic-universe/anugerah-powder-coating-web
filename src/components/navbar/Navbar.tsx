"use client"; // Add this line at the top of your file

import { NextPage } from 'next';
import { useState } from 'react'; // Import useState from react

interface Props {}

const Navbar: NextPage<Props> = () => {
  // State untuk mengontrol visibilitas sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed top-0 z-50 backdrop-blur-md w-full">
      {/* Container Navbar */}
      <div className="bg-transparent max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo dan Title */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/images/logo/logo.png " alt="Logo"
            className="h-10"
          />
        </a>

        {/* Mobile Toggle Icon */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse cursor-pointer items-center" onClick={toggleSidebar}>
          {/* Icon Toggle Menu (Mobile Only) */}
          <div className="flex md:hidden">
            <svg
              className="w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
          {/* Tombol Kontak Kami */}
          <div className='hidden md:flex'>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => e.stopPropagation()} // Prevent sidebar toggle on button click
          >
            Kontak Kami
          </button>
          </div>
        </div>

        {/* Menu Item Desktop */}
        <div className="md:order-1 hidden md:flex md:w-auto">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-400 bg-white rounded md:bg-transparent md:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricelist
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Galeri
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Testimoni
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        {/* Overlay ketika sidebar terbuka */}
        {isOpen && (
          <div className="absolute left-0 top-0 w-full h-screen bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out" onClick={toggleSidebar} />
        )}
        
        {/* Sidebar untuk Mobile */}
        <div className={`absolute top-0 left-0 w-64 bg-white h-screen border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col font-medium p-4">
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100">Layanan</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100">Pricelist</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100">Galeri</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100">Testimoni</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
