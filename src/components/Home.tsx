import React from 'react';
import NewInterviews from './NewInterviews';
import StickyHeader from './StickyHeader';

export default function Home() {
  return (
    <div className="h-5/6 rounded-4xl mt-4">
      <StickyHeader bgColor="bg-cordPurple" title="New Engagements" />
      <NewInterviews />
    </div>
  );
}
