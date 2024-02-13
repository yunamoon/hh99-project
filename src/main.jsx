import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // Redux의 Provider를 가져옵니다.
import store from '@/stores/index.jsx'; // Redux 스토어를 가져옵니다.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider로 App 컴포넌트를 감싸줍니다. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
