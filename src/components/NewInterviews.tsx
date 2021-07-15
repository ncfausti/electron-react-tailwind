import React from 'react';
import { LocationMarkerIcon, DotsHorizontalIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import Store from 'electron-store';
import log from 'electron-log';
import { fmtTime } from '../utils/index';

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

export default function NewInterviews() {
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
  const store = new Store();

  log.info(store.get(`example.reactions.person_id_0`));

  return (
    <div className="h-5/6 overflow-scroll rounded-b-4xl bg-cordGray-darker shadow">
      <ul className="overflow-scroll divide-y divide-none">
        {positions.map((position) => (
          <li className="hover:bg-cordGray-dark-medium" key={position.id}>
            <Link
              to={`/interviews/${position.id}`}
              className="border-b mx-6 py-6 h-56 block"
            >
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
