import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import user from '@testing-library/react';
import Resty from '../Resty/Resty';
import Form from '../../components/Form/Form';
import { MemoryRouter } from 'react-router-dom';


describe('Resty Container', () => {
  it('renders Resty', async () => {
    render(<MemoryRouter><Resty /></MemoryRouter>);

 
    const urlInput = await screen.findByPlaceholderText('URL');
    fireEvent.change(urlInput, { target: { value: 'test' } });
    expect(urlInput.value).toBe('test');

    const radioButton = await screen.findByRole('radio');
    fireEvent.change(radioButton, { target: { value: 'GET' } });
    expect(radioButton.value).toBe('GET');

    const submitButton = await screen.findByRole('button');
    fireEvent.change(submitButton, { target: { value: 'submit' } });
    expect(submitButton.value).toBe('submit');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement(); 

    //find url input
    //find radio button
    //find submit button
    //user.type (import user from testing library) 
    //find what user submitted (url)
    //user.type(urlInputVariable, http//:site)
    //user.click(radioButtonValue)
    //user.click(userSubmit)
    //expect(screen - displayId).not.toBeEmptyDOMElement();

    // userEvent.type(screen.getByPlaceholderText('URL'))
    // expect(screen.getByPlaceholderText('URL')).toMatch();

    // userEvent.click(screen.getByRadioButtonValue('radio'))
    // expect(screen.getByRadioButtonValue('radio')).toMatch('GET');


  });
});
