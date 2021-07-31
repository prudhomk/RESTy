import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Form from '../Form/Form';

describe('Form component', () => {
  afterEach(() => cleanup());
  it('renders Form', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });
});
