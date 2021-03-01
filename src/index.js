import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import Wrapper from './i18n/Wrapper'

ReactDOM.render(
  <Wrapper>
    <App date = {Date.now()} />
  </Wrapper>,
  document.getElementById('root')
);
