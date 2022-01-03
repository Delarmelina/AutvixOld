import React from 'react';
import ReactDOM from 'react-dom';

import { UserContextProvider } from './context/userContext';

import './config/dependencies'
import App from './main/App';

ReactDOM.render(
    <UserContextProvider>
      <App />
    </UserContextProvider>,
  document.getElementById('root')
);

//testes