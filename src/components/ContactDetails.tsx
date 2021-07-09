import React from 'react';
import { useParams } from 'react-router-dom';

export interface IUserPublicProfileRouteParams {
  uid: string;
  userName: string;
}

export default function ContactDetails() {
  const { uid } = useParams<IUserPublicProfileRouteParams>();
  return (
    <div className="h-5/6 rounded-4xl mt-4 text-white">
      CONTACT ID: {uid}
      <br />
      DETAILS PAGE
    </div>
  );
}
