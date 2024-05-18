import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import './index.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <CookiesProvider>
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading... </div>}>
          <ThemeProvider theme={lightTheme}>
            <App />
          </ThemeProvider>
        </React.Suspense>
      </BrowserRouter>
    </CookiesProvider>
  </RecoilRoot>
);
