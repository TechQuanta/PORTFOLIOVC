// src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Theme Context
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

/**
 * Provides theme (light/dark mode) state and toggle functionality to its children.
 * It detects system preference and persists user preference in localStorage.
 */
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode from localStorage or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    // Check system preference only if no user preference is saved
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to apply 'dark' class to html element and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Effect to listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only update if user hasn't manually overridden (i.e., 'darkMode' is not explicitly set in localStorage)
      // We check localStorage again here to be sure, in case another tab changed it.
      if (localStorage.getItem('darkMode') === null || localStorage.getItem('darkMode') === 'null') { // Check for 'null' string too
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []); // Empty dependency array means this runs once on mount

  // Function to toggle dark mode manually
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    // When manually toggled, explicitly set localStorage to override system preference
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for convenience
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
