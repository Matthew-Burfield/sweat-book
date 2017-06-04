import React from 'react';
import Todo from './src/Todo'
import { Provider } from 'react-redux'
import { store } from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}
