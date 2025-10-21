// Layout.jsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar/navbar';
import ContactFormModal from './components/contact';
import { MessageSquare } from 'lucide-react'; 

const Layout = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setIsDarkMode(mediaQuery.matches);

    setIsDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (showContactModal) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showContactModal]);

  return (
    <div className="min-h-screen flex flex-col font-inter bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} />

      <main className="flex-grow p-4 sm:p-8">
        <Outlet /> 
      </main>

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
        isDarkMode={isDarkMode} 
      />
    </div>
  );
};

export default Layout;