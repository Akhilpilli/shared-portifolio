import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Function to get system preference
const getSystemPreference = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light'; // Default fallback
};

export const ThemeProvider = ({ children }) => {
  // Check localStorage for saved theme preference, otherwise use system preference
  const [theme, setTheme] = useState(() => {
    // Check if user has explicitly set a preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Use system preference if no saved preference
    return getSystemPreference();
  });

  useEffect(() => {
    // Apply theme class to document root immediately to prevent flash
    document.documentElement.setAttribute('data-theme', theme);
    
    // Only save to localStorage if user has explicitly set it
    // Check if there's already a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Listen to system preference changes (only if user hasn't explicitly set a preference)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    // Only listen to system changes if user hasn't manually set a preference
    if (!savedTheme && typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleSystemThemeChange = (e) => {
        // Only update if no manual preference is set
        const currentSaved = localStorage.getItem('theme');
        if (!currentSaved) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      };

      // Add listener for system theme changes
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleSystemThemeChange);
      } else {
        // Fallback for older browsers
        mediaQuery.addListener(handleSystemThemeChange);
      }

      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleSystemThemeChange);
        } else {
          mediaQuery.removeListener(handleSystemThemeChange);
        }
      };
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      // Save to localStorage when user manually toggles
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

