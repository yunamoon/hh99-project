import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; // 경로 수정
import './index.css'; // 경로 수정
import { Provider } from 'react-redux'; 
import store from './store/index.jsx'; // 경로 수정

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
