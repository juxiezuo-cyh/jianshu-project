import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import store from './store/index.js';
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    )
  }
}
