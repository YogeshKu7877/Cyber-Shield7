import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-black">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ebf4f5] py-7">
          <h1
            className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            <span className="text-teal-400">Cyber</span> Shield
          </h1>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Empowering online users with digital privacy education and combating
            hate speech through advanced detection and reporting.
          </p>
          <div className="max-w-sl text-base leading-7 text-gray-500 lg:max-w-lg">
            <p>
              To create a safer and more respectful digital environment by
              educating users on digital privacy and eliminating hate speech
              through advanced detection and reporting mechanisms.
            </p>
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 text-white"
            >
              <ul className="flex flex-wrap items-center mb-6 text-[1.1rem] font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                  <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/cyberSecurity" className="mr-4 hover:underline md:mr-6">
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs" className="mr-4 hover:underline md:mr-6 ">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/reporting" className="hover:underline">
                    Reporting
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              Cyber Shield™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;