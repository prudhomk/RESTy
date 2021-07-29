import React, { Component } from 'react';
import Search from '../../components/Search/Search';
import Radio from '../../components/Radio/Radio';
import Json from '../../components/Json/Json';

export default class Rest extends Component {
    state = {
      url: '',
      json: '',
      radioValue: '',
    };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    };

    render() {
      const { url, json, radioValue } = this.state;

      return (
        <>
          <Search 
            url={url}
          />

          <Radio 
            radioValue={radioValue}
          />

          <Json 
            json={json}
          />
        </>

      );
    }
}

