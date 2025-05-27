import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.tsx';
import theme from './theme';
import './assets/TT_Norms_Pro_Compact_Regular.woff2';
import './assets/TT_Norms_Pro_Normal.woff2';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider value={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
