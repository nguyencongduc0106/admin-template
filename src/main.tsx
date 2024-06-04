import React from 'react';
import ReactDOM from 'react-dom/client';

import ReduxProvider from './providers/redux.provider.tsx';
import App from './App.tsx';

import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
