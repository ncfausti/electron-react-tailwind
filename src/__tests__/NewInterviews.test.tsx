import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NewInterviews from '../components/NewInterviews';

describe('NewInterviews', () => {
  it('should render', () => {
    expect(render(<NewInterviews />)).toBeTruthy();
  });
});
