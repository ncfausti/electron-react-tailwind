import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';

export default function ContactDetails() {
  const { uid } = useParams();
  return (
    <div className="h-5/6 rounded-4xl mt-4 text-white">
      CONTACT ID: {uid} DETAILS PAGE
    </div>
  );
}
