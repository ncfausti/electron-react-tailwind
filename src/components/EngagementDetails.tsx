import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

export default function EngagementDetails() {
  const { uid } = useParams();
  return (
    <div className="h-5/6 rounded-4xl mt-4 text-white">
      Engagement ID: {uid}
      <br />
      DETAILS PAGE
    </div>
  );
}
