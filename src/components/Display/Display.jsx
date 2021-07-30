import React from 'react';
import PropTypes from 'prop-types';

import ReactJson from 'react-json-view';

const Display = ({ display }) => {
  return (
    <ReactJson src={display} displayDataTypes={false} />
  );
};

Display.propTypes = {
  display: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Display;
