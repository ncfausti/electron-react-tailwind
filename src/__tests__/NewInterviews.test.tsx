import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NewInterviews from '../components/NewInterviews';

describe('NewInterviews', () => {
  it('should render', () => {
    expect(
      render(
        <Router>
          <NewInterviews />
        </Router>
      )
    ).toBeTruthy();
  });
});
