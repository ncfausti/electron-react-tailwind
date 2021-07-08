import React from 'react';
import {
  LocationMarkerIcon,
  DotsHorizontalIcon,
  UsersIcon,
  AnnotationIcon,
} from '@heroicons/react/solid';
import fmtTime from '../utils/index';

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
    description: lipsum,
    department: 'Participant 1',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
    commentCount: '4',
  },
  {
    id: 2,
    title: 'Interview Name',
    type: 'Full-time',
    location: 'Remote',
    description: lipsum,
    department: 'Participant 2',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
    commentCount: '4',
  },
  {
    id: 3,
    title: 'Interview Name',
    type: 'Full-time',
    location: 'Remote',
    description: lipsum,
    department: 'Participant 1, Participant 2',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
    commentCount: '4',
  },
  {
    id: 4,
    title: 'Interview Name',
    type: 'Full-time',
    location: 'Remote',
    description: lipsum,
    department: 'Participant 2, Participant 3',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
    commentCount: '4',
  },
  {
    id: 5,
    title: 'Interview Name',
    type: 'Full-time',
    location: 'Remote',
    description: lipsum,
    department: 'Participant 7',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
    commentCount: '4',
  },
];

export default function NewInterviews() {
  return (
    <div className="mt-6 bg-cordGray-darker shadow">
      <ul className="divide-y divide-none">
        {positions.map((position) => (
          <li className="hover:bg-cordGray-dark-medium" key={position.id}>
            <a href="/" className="border-b mx-6 p-6 h-56 block">
              <div className="h-48 grid grid-rows-5 grid-flow-col gap-1 font-sm text-white">
                <div className="text-lg">{position.title}</div>
                <div className="-mt-3 font-extralight text-base">
                  {`${month}/${day}/${year} ${fmtTime(date)}`}
                  <LocationMarkerIcon
                    className="inline flex-shrink-0 mx-1.5 mb-1 h-5 w-4 text-white"
                    aria-hidden="true"
                  />
                  {position.location}
                  <br />
                  <span className="pt-2">
                    <span className="font-medium">Participants:</span>
                    <span className="mx-2 font-extralight text-cordGray-light">
                      {position.department}
                    </span>
                  </span>
                </div>
                <div className="mt-2 col-span-2 overflow-ellipsis overflow-hidden">
                  <p className="truncate text-cordGray font-light">{lipsum}</p>
                </div>
                <div />
                <div className="-mx-3 col-span-2 text-right">
                  Comments{' '}
                  <span className="text-cordGold">
                    ({position.commentCount})
                  </span>
                </div>
                <div className="col-span-2 text-right">
                  <DotsHorizontalIcon className="inline flex-shrink-0 mb-1 h-6 w-6 text-white" />
                </div>
                <div />
                <div />
                <div />
              </div>
              {/*
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white truncate">
                    {position.title}
                    <br />
                    <span className="font-thin">{`${month}/${day}/${year} ${fmtTime(
                      date
                    )}`}</span>
                    <br />
                    <p className="overflow-x-hidden line-clamp-2 font-thin text-sm">
                      {position.description}
                    </p>
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
                    <AnnotationIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      Comments{' '}
                      <time dateTime={position.closeDate}>
                        {position.closeDateFull}
                      </time>
                    </p>
                  </div>
                </div>
              </div>
             */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
