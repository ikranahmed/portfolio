import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'; // Optional
import App from './App';
import './index.css';
import './assets/styles/global.css'; 
import { theme } from './theme'; // Optional


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Optional */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);