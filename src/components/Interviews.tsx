import React from 'react';
import DataTable from './DataTable';
import StickyHeader from './StickyHeader';

export default function Interviews() {
  return (
    <div className="h-5/6 rounded-4xl mt-4">
      <StickyHeader bgColor="bg-cordPurple" title="Engagements" />
      <DataTable />
    </div>
  );
}
