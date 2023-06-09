import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from './store';
import App from './App';
import'./fonts/SBSansInterface/SBSansInterface.ttf'

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/cloudCampForm'>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
