import React from 'react';
import NewInterviews from './NewInterviews';

export default function Home() {
  return (
    <div className="flex-grow rounded-4xl mt-4">
      <div className="overflow-x-hidden">
        <h3 className="sticky p-6 text-lg leading-6 rounded-t-4xl bg-cordPurple font-light text-white">
          New Interviews
        </h3>
        <NewInterviews />
      </div>
    </div>
  );
}
