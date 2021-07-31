import React from 'react';
import PropTypes from 'prop-types';

const History = ({ method, url, id }) => {
  return (
    <article id={id}>
      <p id={id}>{method}</p>
      <span id={id}>{url}</span>
    </article>
  );
};

History.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default History;
