import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { navigation } from '../../data';
import icon from '../../assets/icons/cord-logo.png';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center">
                  <img className="h-8 w-auto" src={icon} alt="Workflow" />
                </div>
                <nav className="mt-5 px-2 bg-cordGray-darker space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      className={classNames(
                        false
                          ? 'bg-cordGray text-white'
                          : 'text-gray-100 hover:bg-cordGray hover:text-white',
                        'group flex items-center px-2 py-2 text-base font-thin rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          false
                            ? 'text-gray-100'
                            : 'text-gray-400 group-hover:bg-cordGray',
                          'mr-4 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 bg-cordGray-darker">
            <div className="flex-1 flex flex-col p-4 py-6 overflow-y-auto">
              <div className="flex items-center text-gray-100 flex-shrink-0">
                <img className="h-8 w-auto" src={icon} alt="Cord" />
                <span className="ml-3 text-2xl font-normal">Cord</span>
              </div>
              <nav className="mt-5 flex-1 bg-cordGray-darker space-y-1">
                {navigation.map((item) => (
                  <>
                    <Link key={item.name} to={item.path}>
                      <span
                        className={classNames(
                          false
                            ? 'bg-cordGray text-white'
                            : 'text-white hover:bg-cordGray-dark hover:text-white',
                          'group flex items-center px-2 py-2 my-2 text-md font-extralight rounded-3xl'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            false
                              ? 'text-gray-100'
                              : 'text-gray-400 group-hover:text-gray-100',
                            'flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden="true"
                        />
                        <span className="ml-4">{item.name}</span>
                      </span>
                    </Link>
                  </>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
