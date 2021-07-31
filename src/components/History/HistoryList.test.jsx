/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from '../History/HistoryList';

describe('HistoryList component', () => {
  const history = [{ 'url':'', 'method':'PUT', 'body':'', 'key':'+PUT' }, { 'url':'', 'method':'PATCH', 'body':'booger', 'key':'+PATCH' }, { 'url':'https://ac-vill.herokuapp.com/villagers', 'method':'GET', 'body':'', 'key':'https://ac-vill.herokuapp.com/villagers+GET' }]
  const onClick = jest.fn();
  afterEach(() => cleanup());
  it('renders HistoryList', () => {
    const { asFragment } = render(<HistoryList history={history} onClick={onClick}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
