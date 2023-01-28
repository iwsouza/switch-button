import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export * from './components/switch-button'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />,
);
