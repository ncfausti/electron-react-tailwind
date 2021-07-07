import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Sidebar from '../components/sidebar';

describe('Sidebar', () => {
  it('should render', () => {
    expect(
      render(
        <Router>
          <Sidebar />
        </Router>
      )
    ).toBeTruthy();
  });
});
