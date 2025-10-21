import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CalendarDays, MapPin } from 'lucide-react'; 

// --- JSON Data Import ---
// Assuming details.json is in the same directory and can be imported directly
import timelineData from './details.json'; 
// ------------------------

const education = timelineData.education;
const experience = timelineData.experience;

/**
 * EducationExperience Component (The core display logic)
 * * Displays the user's education and work experience in a responsive, animated
 * timeline layout, adapting automatically to the user's system dark/light mode preference.
 *
 * @param {object} props - The component's properties.
 * @param {boolean} [props.isDarkMode] - Indicates if dark mode is currently active.
 */
const EducationExperience = ({ isDarkMode }) => {

  // Framer Motion variants for section titles
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Framer Motion variants for individual timeline items
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Timeline Item Renderer
  const TimelineItem = ({ data, index, type }) => {
    // Logic for alternating alignment
    const isEven = index % 2 === 0;
    const isEducation = type === 'education';
    // Use the custom CSS properties to make the timeline dots/lines themed
    const primaryColor = isEducation ? 'purple' : 'blue';
    const Icon = isEducation ? GraduationCap : Briefcase;
    
    // Choose animation based on alignment
    const animationVariants = isEven ? itemVariants : itemVariantsRight;
    
    // Classes for desktop alignment (left/right of center line)
    const directionClass = isEven ? 'md:justify-start' : 'md:justify-end';
    
    // Classes for text and icon alignment within the card
    const alignClass = isEven ? 'md:text-right md:items-end' : 'md:text-left md:items-start';
    
    // Classes for margin/positioning relative to the center line
    const textAlignment = isEven ? 'md:ml-0 md:mr-8' : 'md:mr-0 md:ml-8';


    return (
      <div
        key={data.id}
        className={`flex w-full relative ${directionClass}`}
      >
        {/* Timeline Dot (Desktop) */}
        <div className={`absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-${primaryColor}-500 dark:bg-${primaryColor}-400 border-4 border-gray-100 dark:border-gray-900 z-10 hidden md:flex items-center justify-center`}>
          <span className="block w-2 h-2 rounded-full bg-white dark:bg-gray-900"></span>
        </div>
        
        {/* Timeline Line and Dot (Mobile Fallback) */}
        <div className={`absolute left-0 top-0 h-full w-1 bg-${primaryColor}-300 dark:bg-${primaryColor}-700 md:hidden`}></div>
        {/* Mobile Dot */}
        <div className={`absolute top-0 left-0 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-${primaryColor}-500 md:hidden`}></div>


        <motion.div
          className={`w-full md:w-[calc(50%-2rem)] transition-colors duration-300 relative ${textAlignment} flex flex-col ${alignClass} py-4 md:py-0 pl-6 md:pl-0`}
          variants={animationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className={`p-6 rounded-2xl transition-all duration-300 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl hover:translate-y-[-5px] hover:scale-[1.01] border border-gray-200 dark:border-gray-700 w-full`}>
            <div className={`flex items-start mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
              <Icon size={32} className={`text-${primaryColor}-600 dark:text-${primaryColor}-400 ${isEven ? 'md:order-2 md:ml-4' : 'mr-4'}`} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{isEducation ? data.degree : data.title}</h3>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-semibold">
              {isEducation ? data.institution : data.company}
            </p>

            <p className="text-md text-gray-500 dark:text-gray-400 mb-2 flex items-center">
              <CalendarDays size={18} className={`mr-2 ${isEven ? 'md:hidden' : 'inline'}`} />
              <span className={isEven ? 'md:mr-2' : ''}>{data.years}</span>
              <CalendarDays size={18} className={`ml-2 hidden ${isEven ? 'md:inline' : ''}`} />
            </p>

            {data.location && (
              <p className="text-md text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                <MapPin size={18} className={`mr-2 ${isEven ? 'md:hidden' : 'inline'}`} />
                <span className={isEven ? 'md:mr-2' : ''}>{data.location}</span>
                <MapPin size={18} className={`ml-2 hidden ${isEven ? 'md:inline' : ''}`} />
              </p>
            )}

            {isEducation ? (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-left">
                {data.details}
              </p>
            ) : (
              // Responsibilities list is always left-aligned for readability
              <ul className="list-disc text-gray-600 dark:text-gray-400 leading-relaxed space-y-2 text-left ml-4">
                {data.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="education-experience" className="w-full min-h-screen py-16 px-4 sm:px-8 lg:px-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex flex-col items-center justify-start font-inter overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto relative">
        {/* Central Timeline Line (Desktop Only) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

        {/* Education Section */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center relative pb-4 z-10 px-4"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          My <span className="text-purple-600 dark:text-purple-400">Education</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-purple-500 dark:bg-purple-400 rounded-full"></span>
        </motion.h2>

        <div className="flex flex-col gap-16 mb-20">
          {education.map((edu, index) => (
            <TimelineItem key={edu.id} data={edu} index={index} type="education" />
          ))}
        </div>

        {/* Experience Section */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center relative pb-4 z-10 px-4"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          My <span className="text-blue-600 dark:text-blue-400">Experience</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
        </motion.h2>

        <div className="flex flex-col gap-16">
          {experience.map((exp, index) => (
            // Using index + 1 here ensures the first experience item is on the right, continuing the alternating pattern smoothly
            <TimelineItem key={exp.id} data={exp} index={index + 1} type="experience" />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App component to handle environment setup and system dark mode detection
const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effect to detect system preference and set up listener
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const setMode = () => setIsDarkMode(mediaQuery.matches);
        setMode(); // Initial check

        // Listener for changes
        const handler = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    // Effect to apply 'dark' class to HTML root element
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);
    
    return (
        <div className="min-h-screen transition-colors duration-500" style={{ fontFamily: 'Inter, sans-serif' }}>
            <main>
                <EducationExperience isDarkMode={isDarkMode} />
            </main>
        </div>
    );
};

export default App;
