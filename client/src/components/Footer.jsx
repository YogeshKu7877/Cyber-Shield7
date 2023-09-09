import React from "react";
<<<<<<< HEAD
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
=======
import {Link} from "react-router-dom";
>>>>>>> nikhil

const Footer = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="w-full px-4 pt-16">
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>How can I stay updated on the latest cybersecurity trends and news?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                CyberShield regularly publishes articles, blog posts, and newsletters to keep you informed about the 
                latest developments in the cybersecurity landscape. By subscribing to our updates, 
                you'll stay ahead of emerging threats and learn about effective countermeasures.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>What is CyberShield and how can it help me protect myself from cyber attacks?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                  CyberShield is a comprehensive platform designed to empower individuals 
                  with tools and techniques to secure themselves from cyber threats. 
                  It provides a range of resources, tutorials, and practical advice 
                  to enhance your online safety.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>How does the HSDR (Hate Speech Detection and Report) function work?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                The HSDR function in CyberShield is a unique tool that allows you to check for abusive or hate speech 
                within a paragraph you paste into the input box. 
                It utilizes advanced algorithms to analyze the text and promptly identifies 
                any potentially harmful content.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>Can I report instances of hate speech detected by HSDR?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                Yes, you can! If HSDR identifies hate speech in the content you provided, 
                you will have the option to report it. 
                Our system takes user reports seriously and investigates them thoroughly to ensure a safer online environment.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>What are some basic cybersecurity practices I should implement?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                CyberShield offers a wealth of resources to guide you on fundamental cybersecurity practices. 
                These include creating strong, unique passwords, 
                regularly updating software, being cautious of phishing attempts, and using reputable security tools.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="flex flex-col items-center justify-between w-full font-medium text-left rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-5 py-2 mb-5 text-left text-sm font-medium text-blue-900 hover:bg-[#ebf4f5] focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>Are there specific tools and techniques recommended for different types of cyber threats?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                Absolutely! CyberShield provides specialized guides for various types of cyber threats, 
                such as malware, phishing, and social engineering attacks. 
                These guides offer step-by-step instructions on how to defend against specific threats.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

=======
>>>>>>> nikhil
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
<<<<<<< HEAD
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6 ">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Reporting
                  </a>
=======
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
>>>>>>> nikhil
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
<<<<<<< HEAD
            <a href="https://flowbite.com/" className="hover:underline">
              Cyber Shield™
            </a>
=======
            <Link to="/" className="hover:underline">
              Cyber Shield™
            </Link>
>>>>>>> nikhil
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> nikhil
