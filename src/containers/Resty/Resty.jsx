/* eslint-disable max-len */
import React, { Component } from 'react';
import Form from '../../components/Form/Form';
import { fetchCall } from '../../services/fetchCall';
import Display from '../../components/Display/Display';
import HistoryList from '../../components/History/HistoryList';
import styles from './Resty.css';

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

    handleSubmit = (e) => {
      const { history, url, method, body } = this.state;
      const key = `${url}+${method}+${body}`;

      e.preventDefault();
      this.fetch();

      if(history.filter(item => item.key === key).length > 0 || method === '') return;
      this.setState(state => ({

        history: [...state.history, {
          url: state.url,
          method: state.method,
          body: state.body,
          key: `${state.url}+${state.method}+${state.body}`
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
        method: result.method,
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
          <section className={styles.Resty}>
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
