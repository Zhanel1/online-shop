import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserStore from './store/userStore';
import ProductStore from './store/ProductStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
