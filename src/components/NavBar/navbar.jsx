import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// Changed User to Phone for mobile contact icon
import { Briefcase, GraduationCap, BookOpen, FileText, Phone } from 'lucide-react';

const Navbar = () => {
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    // Function to handle smooth scrolling to a section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile navbar after clicking a link
        if (window.innerWidth <= 768) {
            setIsMobileNavActive(false);
        }
    };

    // Effect to manage 'is-active' class for mobile navbar animation
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                // On mobile, if navbar isn't active, briefly activate it for initial animation
                // This ensures the slide-up animation plays when the page loads on mobile.
                if (!isMobileNavActive) {
                    setIsMobileNavActive(true);
                }
            }
            // On desktop, ensure mobile navbar is inactive, but allow initial state to be active for mobile animation on load
            else {
                setIsMobileNavActive(false);
            }
        };

        handleResize(); // Call once on mount
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileNavActive]); // Depend on isMobileNavActive to re-run effect when it changes

    return (
        <nav className={`navbar ${isMobileNavActive ? 'is-active' : ''}`}>
            {/* Profile Image (Desktop) / Contact Icon (Mobile) */}
            <NavLink
                to="/" // This links to the #profile section
                className={({ isActive }) => `nav-link nav-profile-link ${isActive ? 'active' : ''}`}
                onClick={() => scrollToSection('profile')}
            >
                <div className="profile-image-container">
                    {/* Replace 'your-profile-image.jpg' with your actual image path */}
                    <img src="https://avatars.githubusercontent.com/u/125592050?s=96&v=4" alt="Profile" className="profile-image" />
                    <Phone size={24} className="nav-icon mobile-contact-icon" /> {/* Only visible on mobile */}
                </div>
                <span className="nav-text profile-text">Profile</span>
            </NavLink>

            {/* Projects Icon */}
            <NavLink
                to="/projects" // Links to the #projects section
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
            >
                <Briefcase size={24} className="nav-icon" />
                <span className="nav-text">Projects</span>
            </NavLink>

            {/* Education & Experience Icon */}
            <NavLink
                to="/experience" // Links to the #experience section
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => scrollToSection('experience')}
            >
                <GraduationCap size={24} className="nav-icon" />
                <span className="nav-text">Education & Experience</span>
            </NavLink>

            {/* Courses Icon */}
            <NavLink
                to="/courses" // Links to the #courses section
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => scrollToSection('courses')}
            >
                <BookOpen size={24} className="nav-icon" />
                <span className="nav-text">Courses</span>
            </NavLink>

            {/* Resume/PDF Download Icon */}
           <a
                href="https://drive.google.com/file/d/1DCsKKcUkMfew1GG9lAscrDUyb9JQaZA2/view?usp=drive_link"
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice
                className="nav-link"
            >
                <FileText size={24} className="nav-icon" />
                <span className="nav-text">Resume</span>
            </a>
        </nav>
    );
};

export default Navbar;