import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import NewInterviews from './NewInterviews';
import StickyHeader from './StickyHeader';

export default function Home() {
  const { path, url } = useRouteMatch();
  return (
    <div className="h-5/6 rounded-4xl mt-4">
      <StickyHeader bgColor="bg-cordPurple" title="New Engagements" />
      <NewInterviews />
    </div>
  );
}
