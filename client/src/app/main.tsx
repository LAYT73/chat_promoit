import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import App from './App.tsx';
import { NotificationProvider } from '@/shared/lib/notifications/context/NotificationContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotificationProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NotificationProvider>
  </React.StrictMode>,
);
