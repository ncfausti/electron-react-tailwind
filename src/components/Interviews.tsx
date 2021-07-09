import React from 'react';
import DataTable from './DataTable';
import StickyHeader from './StickyHeader';

export default function Interviews() {
  const interviewPeople = [
    {
      name: 'Jane Cooper',
      location: 'Syria',
      mgrs: '4QFJ12345678',
      participants: 'p1, p2',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jane Cooper',
      location: 'Syria',
      mgrs: '4QFJ12345678',
      participants: 'p1, p2',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ];
  return (
    <div className="h-5/6 rounded-4xl mt-4">
      <StickyHeader bgColor="bg-cordPurple" title="Engagements" />
      <DataTable bgColor="bg-cordGray-dark-medium" />
    </div>
  );
}
