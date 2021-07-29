import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ url, onChange, onSubmit }) => (
  <>
    <label htmlFor="url">Search</label>
    <input
      id="url"
      type="url"
      name="url"
      value={url}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  </>
);

Search.propTypes = {
  url: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isReqruied,
};

export default Search;
