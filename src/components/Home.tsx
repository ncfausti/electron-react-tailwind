import React from 'react';
import NewInterviews from './NewInterviews';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <h3 className="m-4 text-lg leading-6 font-light text-white">
        New Interviews
      </h3>
      <NewInterviews />
    </div>
  );
}
