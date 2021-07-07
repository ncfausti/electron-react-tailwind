import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';
import { routes } from '../../data';

export default function Main() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
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
        <main className="flex-1 relative z-0 bg-cordGray-darkest overflow-y-auto focus:outline-none">
          <div className="py-5">
            <div className="mx-6 pb-2 flex items-center justify-between flex-wrap sm:flex-nowrap border-b border-cordGray-dark">
              <h1 className="text-2xl font-thin text-gray-100 pb-3 capitalize">
                {location.pathname === '/'
                  ? 'Home'
                  : location.pathname.slice(1)}
              </h1>
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cordPurple hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add New
                </button>
              </div>
            </div>
            <div className="mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.}
                  <Route key={route.path} path={route.path} exact={route.exact}>
                    <route.main />
                  </Route>
                ))}
              </Switch>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
