import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'; 
import './index.css';
import App from './App';
import { AppProvider } from './context/appContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

