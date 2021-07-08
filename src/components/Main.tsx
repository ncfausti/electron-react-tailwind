import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';
import { routes } from '../../data';

export default function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          type="button"
          className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <main className="h-full p-6 flex flex-col flex-auto relative z-0 bg-cordGray-darkest focus:outline-none">
        <div className="pb-4 flex items-center justify-between flex-wrap sm:flex-nowrap border-b border-cordGray-dark">
          <h1 className="sticky text-2xl font-thin text-gray-100 pb-3 capitalize">
            {/* on initial load, location.pathname shows the full file url (*.html) */}
            {location.pathname === '/' || location.pathname.endsWith('html')
              ? 'Home'
              : location.pathname.slice(1)}
          </h1>
          <div className="flex-shrink-0">
            <input
              type="text"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-4xl pl-4 pr-3 py-2 m-3 text-white bg-cordGray-dark placeholder-white font-extralight text-white"
              placeholder="Search"
            />
            <button
              type="button"
              className="relative inline-flex items-center px-8 py-2 border border-transparent shadow-sm text-base font-light rounded-md text-white bg-cordPurple hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add New
            </button>
          </div>
        </div>
        {/* Replace with your content */}
        <Switch>
          {routes.map((route) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.}
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.main />
            </Route>
          ))}
        </Switch>
        {/* /End replace */}
      </main>
    </div>
  );
}
