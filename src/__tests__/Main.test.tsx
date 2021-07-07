import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Main from '../components/Main';

describe('Main', () => {
  it('should render', () => {
    expect(
      render(
        <Router>
          <Main />
        </Router>
      )
    ).toBeTruthy();
  });
});
