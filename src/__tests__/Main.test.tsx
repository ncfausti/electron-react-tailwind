import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Main from '../components/Main';

const main = (
  <Router>
    <Main />
  </Router>
);

describe('Main', () => {
  it('should render', () => {
    expect(render(main)).toBeTruthy();
  });

  it('should have headers equal to', () => {
    render(main);
    const headerTitle = document.querySelector('h1').innerHTML;
    expect(headerTitle).toBe('Home');
  });
});
