/* eslint-disable max-len */
import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import { fetchCall } from '../../services/fetchCall';
import Display from '../../components/Display/Display';
import HistoryList from '../../components/History/HistoryList';

export default class Resty extends Component {
    state = {
      url: '',
      method: '',
      body: '',
      history: [],
      display: { 'Notice': 'Fetch results will display here!' }
    }

    componentDidMount() {
      const historyStored = JSON.parse(localStorage.getItem('history'));

      if(historyStored) {
        this.setState({ history: historyStored });
      }
    }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = event => {
      const { history, url, method } = this.state;
      const key = `${url}+${method}`;

      event.preventDefault();
      this.fetch();

      if(history.filter(item => item.key === key).length > 0 || method === '') return;
      this.setState(state => ({

        history: [...state.history, {
          url: state.url,
          method: state.method,
          body: state.body,
          key: `${state.url}+${state.method}`
        }]
      }));

      this.setState(state => {
        localStorage.setItem('history', JSON.stringify(state.history));
      });
    }

    handleClick = event => {
      const { id } = event.target;
      let result;

      this.state.history.forEach(item => {
        if(item.key === id) {
          result = item;
        }
      });

      this.setState({
        url: result.url,
        method: result.mtehod,
        body: result.body
      });
    }

    fetch = () => {
      const { url, method, body } = this.state;
      return fetchCall(url, method, body)
        .then(res => this.setState({ display: res }));
    }

    render(){
      const { url, method, body, display, history } = this.state;

      return (
        <>
          <section>
            <HistoryList history={history} onClick={this.handleClick} />
            <div>
              <Form
                url={url}
                method={method}
                body={body}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange} />
              <Display display={display} />
            </div>
          </section>

        </>
      );
    }
}
