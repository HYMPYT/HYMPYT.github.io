import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/triplanner">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
