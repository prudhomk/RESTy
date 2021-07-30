/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import History from './History';

const HistoryList = ({ history, onClick }) => {
  const historyDetails = history.map((item, i) => {
    return ( 
      <li key={`$item.method}+${item.url}`} onClick={onClick}>
        <History method={item.method} url={item.url} id={`${item.url}+${item.method}`} />
      </li>
    );
  });

  return (
    <ul>
      {historyDetails}
    </ul>
  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryList;
