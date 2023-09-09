import { Fragment, useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon, 
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Alert from './Alert';
import LogContext from '../context/logState/LogContext';
import AlertContext from '../context/alertState/AlertContext';

const products = [
  { name: 'Cyber Security', description: 'Discover the significance of digital privacy in the online world.', href: '/cyberSecurity', 
  // icon: ChartPieIcon 
},
  { name: 'Digital Privacy', description: 'Explore expert tips for safeguarding your online privacy.', href: '/cyberSecurity',
  //  icon: CursorArrowRaysIcon 
  },
  { name: 'Privacy risks and threats', description: 'Identify common privacy risks and threats in the digital landscape.', href: '/privacyRisk',
  //  icon: FingerPrintIcon 
  },
  { name: 'Data security', description: 'Learn best practices for securing your data and personal information.', href: '/privacyRisk',
  //  icon: SquaresPlusIcon 
  },
  { name: 'Hate Speech Detection', description: 'Effortlessly identify and combat hate speech online.', href: '/hsd',
  //  icon: ArrowPathIcon 
  },
]
const callsToAction = [
  { name: 'privacy-focused tools', href: '/tools', icon: PlayCircleIcon },
  { name: 'Report Cyber Crime', href: '/privacyRisk', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const LObj = useContext(LogContext);
  const AObj = useContext(AlertContext);

  const handleLogout = () => {
    AObj.showAlert("Log Out Successfull" , "Success" , "green");
    LObj.fillData(null);
  };

  return (
    <>
      <header className="bg-[#ebf4f5]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 shadow-lg" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#172554]">Cyber Shield</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </Link>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Education
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex-auto">
                          <Link to={item.href} className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Link to="/aboutUs" className="text-sm font-semibold leading-6 text-gray-900">
              About Us
            </Link>
            <Link to="/reporting" className="text-sm font-semibold leading-6 text-gray-900">
              Reporting
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
            {!LObj.cookies.access_token ? 
              <button onClick = {(e) => navigate("/signin")} className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </button> :
              <button onClick = {handleLogout} className="text-sm font-semibold leading-6 text-gray-900">
                Log out <span aria-hidden="true">&rarr;</span>
              </button>
            }
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#172554]">Cyber Shield</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home 
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Education
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    to="/aboutUs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/reporting"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Reporting
                  </Link>
                </div>
                
                {!LObj.cookies.access_token ? 
                  <button onClick = {(e) => navigate("/signin")} className = "text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                     <span  
                    className="relative px-5 py-2.5 transition-all ease-in duration-75"
                    > 
                        Log in
                      </span>
                  </button> :
                  <button onClick = {handleLogout} className="text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                    <span  
                    className="relative px-5 py-2.5 transition-all ease-in duration-75"
                    > 
                        Log out
                    </span>
                  </button>
                }

              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <Alert/>
    </>
  )
}
