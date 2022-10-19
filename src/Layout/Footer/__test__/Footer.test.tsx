import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('rendering Footer', () => {
  test('check text', () => {
    render(<Footer />);
  });
});
