/* eslint-disable react/display-name */
import React from 'react';
import { HomeIcon, UsersIcon, AnnotationIcon } from '@heroicons/react/outline';
import Home from '../src/components/Home';
import Interviews from '../src/components/Interviews';
import Contacts from '../src/components/Contacts';

export const navigation = [
  { name: 'Home', path: '/', icon: HomeIcon },
  {
    name: 'Interviews',
    path: '/interviews',
    icon: AnnotationIcon,
  },
  { name: 'Contacts', path: '/contacts', icon: UsersIcon },
];

export const routes = [
  {
    path: '/interviews',
    exact: false,
    sidebar: () => <div className="text-white">Interviews</div>,
    main: () => <Interviews />,
  },
  {
    path: '/contacts',
    exact: false,
    sidebar: () => <div className="text-white">Contacts</div>,
    main: () => <Contacts />,
  },
  {
    path: '/',
    exact: true,
    sidebar: () => <div className="text-white">Home</div>,
    main: () => <Home />,
  },
];
