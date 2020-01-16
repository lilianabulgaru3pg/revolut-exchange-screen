import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const title = 'Revolut';
ReactDOM.render(
  <App title={title} />,
  document.getElementById('root'),
);

module.hot.accept();
