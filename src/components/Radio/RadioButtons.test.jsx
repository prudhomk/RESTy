import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RadioButtons from '../Radio/RadioButtons';

describe('RadioButtons component', () => {
  afterEach(() => cleanup());
  it('renders RadioButtons', () => {
    const { asFragment } = render(<RadioButtons />);
    expect(asFragment()).toMatchSnapshot();
  });
});
