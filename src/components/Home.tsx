import React from 'react';
import NewInterviews from './NewInterviews';

export default function Home() {
  return (
    <div className="py-4">
      <div className="rounded-3xl h-96 bg-cordPurple py-5">
        <div className="-mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="overflow-hidden">
            <h3 className="ml-4 text-lg leading-6 font-light text-white">
              New Interviews
            </h3>
            <NewInterviews />
          </div>
        </div>
      </div>
    </div>
  );
}
