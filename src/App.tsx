import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.global.css';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

export default function App() {
  return (
    <Router>
      <div className="h-screen flex overflow-hidden bg-cordBlack">
        <Sidebar />
        <Main />
      </div>
    </Router>
  );
}
