// Layout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import Navbar from './components/NavBar/navbar'; // Assuming you have a Navbar component
import Navbar from './components/NavBar/navbar'; // Adjust path as necessary
import ContactFormModal from './components/contact'; // Adjust path as necessary
import { MessageSquare } from 'lucide-react'; // Importing the message icon

const Layout = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to detect and update dark mode preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQuery.matches);

    // Set initial state based on current system preference
    setIsDarkMode(mediaQuery.matches);

    // Listen for changes in system preference
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Effect to manage body overflow when modal is open/closed
  useEffect(() => {
    if (showContactModal) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
    // Cleanup function to restore overflow on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showContactModal]);

  return (
    <div className="min-h-screen flex flex-col font-inter bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar Component (uncomment and adjust path if you have one) */}
      <Navbar isDarkMode={isDarkMode} />

      {/* Main content area, where child routes will be rendered by Outlet */}
      <main className="flex-grow p-4 sm:p-8">
        <Outlet /> {/* Outlet is used here to render child routes defined in router.js */}
      </main>

      {/* Floating Contact Button */}
      <div className="fixed top-6 right-6 z-40">
        <button
          onClick={() => setShowContactModal(true)}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          aria-label="Open contact form"
        >
          <MessageSquare size={24} />
          <span>Contact Me</span>
        </button>
      </div>

      {/* Contact Modal */}
      <ContactFormModal
        show={showContactModal}
        onClose={() => setShowContactModal(false)}
        isDarkMode={isDarkMode} // Pass the dark mode state to the modal
      />
    </div>
  );
};

export default Layout;