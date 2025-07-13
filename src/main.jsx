import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Your global CSS
import App from './App.jsx';
// ✨ CORRECTED PATH: Ensure this matches your ThemeContext.js location ✨
import { ThemeProvider } from './contexts/ThemeContext.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider> {/* Wrap the entire App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);
