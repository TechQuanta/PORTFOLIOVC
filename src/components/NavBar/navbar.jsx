import React from 'react';
import { NavLink } from 'react-router-dom'; // NavLink re-added for routing support
import { Briefcase, GraduationCap, BookOpen, FileText, Phone, User } from 'lucide-react'; 

const Navbar = () => {

    // Function to handle smooth scrolling to a section
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Note: This function allows smooth scrolling within a routed page.
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    // Define navigation items
    const navItems = [
        // User icon for desktop, Phone icon for mobile contact link
        { id: 'profile', icon: User, mobileIcon: Phone, text: 'Profile', isProfile: true },
        { id: 'projects', icon: Briefcase, text: 'Projects' },
        { id: 'experience', icon: GraduationCap, text: 'Education & Experience' },
        { id: 'courses', icon: BookOpen, text: 'Courses' },
    ];

    const resumeLink = {
        href: "https://drive.google.com/file/d/1DCsKKcUkMfew1GG9lAscrDUyb9JQaZA2/view?usp=drive_link",
        icon: FileText,
        text: 'Resume'
    };
    
    // Tailwind classes for theme adaptation:
    // 1. Icons and text should be bright on the dark container (light mode) and dark on the light container (dark mode).
    // 2. Container background should be dark in light mode, and light in dark mode.
    const BASE_ICON_TEXT_CLASSES = "text-gray-100 dark:text-gray-900";
    const HOVER_ACTIVE_CLASSES = "hover:bg-blue-600/20 hover:text-blue-500 dark:hover:text-blue-700 transition-colors duration-200";

    return (
        <>
            {/* Desktop Navbar (Vertical - Left) 
            Changed to smaller width (w-16) and vertically centered (top-1/2 -translate-y-1/2) 
            Added rounded-r-xl for curve on the right side only.
            Hidden on small screens (lg:flex)
            */}
            <nav className="hidden lg:flex flex-col fixed top-1/2 left-0 -translate-y-1/2 w-16 z-40 p-1 py-4 
                            bg-gray-900 dark:bg-gray-100 shadow-xl rounded-r-xl transition-colors duration-300 h-fit max-h-[90vh]">
                
                {/* Profile Image / Desktop User Icon (Now NavLink) */}
                <NavLink 
                    to="/" // Links to the root path
                    // Logic to determine active state styling for the image border
                    className={({ isActive }) => `
                        relative w-10 h-10 mx-auto mb-4 mt-4 rounded-full border-2 cursor-pointer overflow-hidden 
                        ${HOVER_ACTIVE_CLASSES} 
                        ${isActive ? 'border-blue-700 dark:border-blue-300' : 'border-blue-500'}
                    `}
                    onClick={() => scrollToSection('profile')}
                    title="Profile"
                >
                    <img 
                        src="https://avatars.githubusercontent.com/u/125592050?s=96&v=4" 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/96x96/6B7280/FFFFFF?text=P"; }}
                    />
                </NavLink>

                {/* Added overflow-y-auto in case there are too many items to fit */}
                <div className="flex flex-col space-y-2 overflow-y-auto">
                    {navItems.filter(item => !item.isProfile).map(item => (
                        // Switched from a to NavLink
                        <NavLink 
                            key={item.id}
                            to={`/${item.id}`} // e.g., /projects, /experience, /courses
                            // If active: apply light background and active text color
                            className={({ isActive }) => `
                                flex items-center justify-center p-2 rounded-xl cursor-pointer group 
                                ${HOVER_ACTIVE_CLASSES} 
                                ${isActive ? 'bg-blue-600/20 text-blue-500 dark:text-blue-700' : BASE_ICON_TEXT_CLASSES}
                            `}
                            onClick={() => scrollToSection(item.id)}
                            title={item.text}
                        >
                            <item.icon size={20} />
                        </NavLink>
                    ))}
                </div>

                {/* External Resume Link (Remains 'a' tag) */}
                <a 
                    href={resumeLink.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`mt-4 flex items-center justify-center p-2 rounded-xl group ${HOVER_ACTIVE_CLASSES}`}
                    title={resumeLink.text}
                >
                    <resumeLink.icon size={20} className={BASE_ICON_TEXT_CLASSES} />
                </a>
            </nav>

            {/* Mobile Navbar (Horizontal - Bottom) 
            Reduced height from h-16 to h-14 for a smaller look.
            Visible on small screens (lg:hidden)
            */}
            <nav className="lg:hidden fixed bottom-0 left-0 w-full h-14 z-50 flex justify-around items-center 
                            bg-gray-900 dark:bg-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_10px_rgba(255,255,255,0.1)] transition-colors duration-300 border-t border-gray-700 dark:border-gray-300">
                {
                    navItems.map(item => (
                        // Switched from a to NavLink
                        <NavLink 
                            key={item.id}
                            to={item.id === 'profile' ? '/' : `/${item.id}`} // Sets path: '/' for profile, '/projects' for others
                            // If active: apply active text color (no background on mobile)
                            className={({ isActive }) => `
                                flex flex-col items-center justify-center p-1 text-center group 
                                ${HOVER_ACTIVE_CLASSES}
                                ${isActive ? 'text-blue-500 dark:text-blue-700' : BASE_ICON_TEXT_CLASSES}
                            `}
                            onClick={() => scrollToSection(item.id)}
                        >
                            {/* Icon rendering logic */}
                            {item.isProfile ? (
                                <item.mobileIcon size={20} />
                            ) : (
                                <item.icon size={20} />
                            )}
                            {/* Text rendering logic */}
                            <span className={`text-xs mt-1 font-medium hidden sm:inline-block`}>{item.text}</span>
                        </NavLink>
                    ))
                }
                {/* Mobile Resume Link (Remains 'a' tag) */}
                <a 
                    href={resumeLink.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-1 text-center group ${HOVER_ACTIVE_CLASSES}`}
                >
                    <resumeLink.icon size={20} className={BASE_ICON_TEXT_CLASSES} />
                    <span className={`text-xs mt-1 font-medium ${BASE_ICON_TEXT_CLASSES} hidden sm:inline-block`}>{resumeLink.text}</span>
                </a>
            </nav>
        </>
    );
};

export default Navbar;
