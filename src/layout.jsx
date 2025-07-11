import React, { useState, useEffect } from 'react';
import Navbar from './componant/NavBar/navbar'; // Assuming Navbar.jsx is in the same directory
import Contact from './componant/contact'; // Assuming Contact.jsx is in the same directory
import { MessageSquare } from 'lucide-react'; // Importing the message icon

const Layout = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the contact modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the contact modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Effect to manage body overflow when modal is open/closed
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
        // Cleanup function to restore overflow on component unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    return (
        <>
            {/* Link to the custom CSS file */}
            <link rel="stylesheet" href="navbar.css" />
            {/* Link to Inter font from Google Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />

            {/* Navbar Component */}
            <Navbar />

            {/* Main content area, pushed by the navbar on desktop */}
            <main className="portfolio-content">
                {children}
            </main>

            {/* Contact Button */}
            <div className="contact-button">
                <div className="contact-slider" onClick={openModal}>
                    <MessageSquare size={24} />
                    <span>Contact Me</span>
                </div>
            </div>

            {/* Contact Modal */}
            {isModalOpen && (
                <div className="modal" style={{ display: 'flex' }}> {/* Use inline style to override display:none */}
                    <Contact onClose={closeModal} />
                </div>
            )}
        </>
    );
};

export default Layout;
