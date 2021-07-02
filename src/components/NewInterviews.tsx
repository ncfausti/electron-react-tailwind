import React from 'react';
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { fmtTime } from '../utils';

const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
  sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
  mollit anim id est laborum.`;

const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

const positions = [
  {
    id: 1,
    title: 'Interview Name',
    type: 'Full-time',
    location: 'Remote',
    department: 'Participant 1',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Interview Name',
    type: 'Full-time',
    location: 'Remote',
    department: 'Participant 2',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'Interview Name',
    type: 'Full-time',
    location: 'Remote',
    department: 'Participant 1, Participant 2',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
  {
    id: 4,
    title: 'Interview Name',
    type: 'Full-time',
    location: 'Remote',
    department: 'Participant 2, Participant 3',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
  {
    id: 5,
    title: 'Interview Name',
    type: 'Full-time',
    location: 'Remote',
    department: 'Participant 7',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
];

export default function NewInterviews() {
  return (
    <div className="mt-4 bg-cordGray-darker shadow overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {positions.map((position) => (
          <li key={position.id}>
            <a href="#" className="block hover:bg-gray-800">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white truncate">
                    {position.title}
                    <br />
                    <span className="font-thin">{`${month}/${day}/${year} ${fmtTime(
                      date
                    )}`}</span>
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {position.type}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UsersIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.department}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <LocationMarkerIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.location}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      Closing on{' '}
                      <time dateTime={position.closeDate}>
                        {position.closeDateFull}
                      </time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
