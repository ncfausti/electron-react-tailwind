import React from 'react';
import DataTable from './DataTable';
import StickyHeader from './StickyHeader';

export default function Contacts() {
  // const people = [
  //   {
  //     name: 'Jane Cooper',
  //     title: 'Regional Paradigm Technician',
  //     department: 'Optimization',
  //     role: 'Admin',
  //     email: 'jane.cooper@example.com',
  //     image:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  //   },
  //   {
  //     name: 'Jane Cooper',
  //     department: 'A19318',
  //     title: 'A19318',
  //     role: 'Admin',
  //     email: 'jane.cooper@example.com',
  //     image:
  //       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  //   },
  // ];

  return (
    <div className="h-5/6 rounded-4xl mt-4">
      <StickyHeader bgColor="bg-cordGreen" title="Contacts" />
      <DataTable
        // columnNames={['Name', 'ID #', 'Age', 'Nationality', '# Interviews']}
        // data={people}
        bgColor="bg-cordGray-dark-medium"
      />
    </div>
  );
}
