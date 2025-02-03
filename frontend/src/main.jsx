import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { NoteTakingApp } from './NoteTakingApp.jsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NoteTakingApp />
    </BrowserRouter>
  </StrictMode>
);
