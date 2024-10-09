"use client"; // Add this line at the top of your file
import Image from "next/image";
import { NextPage } from "next";
import { useState } from "react"; // Import useState from react
import Link from "next/link";

const Navbar: NextPage = () => {
  // State untuk mengontrol visibilitas sidebar
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("home");

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-30 fixed top-0 z-50 backdrop-blur-md w-full border-b border-white border-opacity-20">
      {/* Container Navbar */}
      <div className="bg-transparent max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo dan Title */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/images/logo/anugerah-logo.png"
            alt="Anugerah Coating Blora"
            className="object-contain w-32"
            height={420}
            width={1080}
          />
        </a>

        {/* Mobile Toggle Icon */}
        <div
          className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse cursor-pointer items-center"
          onClick={toggleSidebar}
        >
          {/* Icon Toggle Menu (Mobile Only) */}
          <div className="flex lg:hidden">
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
          <div className="hidden lg:flex">
            <Link
              className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-600"
              href={"/contact"}
              target="_blank"
              onClick={(e) => e.stopPropagation()} // Prevent sidebar toggle on button click
            >
              Kontak Kami
            </Link>
          </div>
        </div>

        {/* Menu Item Desktop */}
        <div className="lg:order-1 hidden lg:flex lg:w-auto">
          <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border rounded-lg lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              "home",
              "layanan",
              "perbandingan",
              "pricelist",
              "galeri",
              "testimoni",
            ].map((tab) => (
              <li key={tab} className="w-20  flex justify-center items-center">
                {selectedTab === tab ? (
                  <a
                    href={`#${tab}`}
                    className="block py-2 md:p-0 font-bold bg-white rounded md:bg-transparent text-blue-500"
                    aria-current="page"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </a>
                ) : (
                  <a
                    href={`#${tab}`}
                    className="block py-2 md:p-0 font-normal hover:font-bold text-gray-100 bg-white rounded md:bg-transparent md:text-white hover:text-blue-500"
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        {/* Overlay ketika sidebar terbuka */}
        {isOpen && (
          <div
            className="absolute left-0 top-0 w-full h-screen bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar untuk Mobile */}
        <div
          className={`absolute top-0 left-0 w-64 bg-white h-screen border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          
          <ul className="flex flex-col font-medium p-4">
            {[
              "home",
              "layanan",
              "perbandingan",
              "pricelist",
              "galeri",
              "testimoni",
            ].map((tab) => (
              <li key={tab}>
                <a
                  href={`#${tab}`}
                  className={`block py-2 px-3 text-gray-700 rounded hover:bg-gray-100 ${
                    selectedTab === tab ? "text-blue-500" : ""
                  }`}
                  onClick={() => {
                    setSelectedTab(tab)
                    setIsOpen(false)
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden px-5">
            <Link
              className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-600"
              href={"/contact"}
              target="_blank"
              onClick={(e) => e.stopPropagation()} // Prevent sidebar toggle on button click
            >
              Kontak Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
