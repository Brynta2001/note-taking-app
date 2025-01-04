import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { NoteTakingApp } from './NoteTakingApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteTakingApp />
  </StrictMode>
);
