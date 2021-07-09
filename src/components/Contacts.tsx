import React from 'react';
import DataTable from './DataTable';
import StickyHeader from './StickyHeader';

export default function Contacts() {
  return (
    <div className="h-5/6 rounded-4xl mt-4">
      <StickyHeader bgColor="bg-cordGreen" title="Contacts" />
      <DataTable bgColor="bg-cordGray-dark-medium" />
    </div>
  );
}
