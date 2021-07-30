import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Display from '../Display/Display';

describe('Display component', () => {
  afterEach(() => cleanup());
  it('renders Display', () => {
    const { asFragment } = render(<Display />);
    expect(asFragment()).toMatchSnapshot();
  });
});
