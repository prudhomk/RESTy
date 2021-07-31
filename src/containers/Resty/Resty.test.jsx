/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Resty from '../Resty/Resty';
import { MemoryRouter } from 'react-router-dom';


describe('Resty Container', () => {
  it('renders Resty', async () => {
    render(<MemoryRouter><Resty /></MemoryRouter>);

    const urlPlaceholder = screen.getByPlaceholderText('URL');
    userEvent.type(urlPlaceholder);
    fireEvent.change(urlPlaceholder, { target: { value: 'https://ac-vill.herokuapp.com/villagers' } });
    expect(urlPlaceholder).toHaveDisplayValue('https://ac-vill.herokuapp.com/villagers');

    const radioValue = screen.getByLabelText('GET');
    userEvent.click(radioValue);
    fireEvent.change(radioValue, { target: { value: 'GET' } });
    expect(radioValue).toBeChecked('GET');

    const submitButton = screen.getByRole('button');
    const display = screen.getByTestId('display');
    userEvent.click(submitButton);
    expect(display).not.toBeEmptyDOMElement();

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement(); 

  });
});
