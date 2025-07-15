// App.jsx
import React from 'react';
// Import icons from lucide-react for a modern, lightweight icon set
import { Github, Code, Award, Linkedin } from 'lucide-react';

// Main App component for the portfolio introduction page
const App = () => {
  return (
    // Main container with responsive padding and system-dependent background color
    <div className="min-h-screen min-w-[100vw] bg-gray-100 dark:bg-gray-900 flex items-center justify-center  font-inter transition-colors duration-300">
      {/* The main content container, set to take full width up to a max-width of 6xl and centered horizontally. */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
        {/* Left Section: Image */}
        {/* Gradient background for the image section, with rounded corners */}
        <div className="md:w-1/4 p-6 flex items-center justify-center bg-transparent rounded-l-2xl md:rounded-tr-none rounded-t-2xl">
          <img
            src="./v.jpg" // Placeholder image
            alt="Profile"
            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/CCCCCC/333333?text=Image+Not+Found"; }} // Fallback for image loading errors
          />
        </div>

        {/* Right Section: Summary */}
        {/* Summary section with system-dependent background and text colors, and rounded corners */}
        <div className="md:w-3/4 p-6 sm:p-10 flex flex-col justify-center text-center md:text-left bg-transparent rounded-r-2xl md:rounded-bl-none rounded-b-2xl transition-colors duration-300">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Hello, I'm <span className="text-blue-600 dark:text-blue-400">Vishal Choudhary</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 mb-6 font-semibold">
            A Passionate <span className="text-purple-600 dark:text-purple-400">Software Developer</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg mb-8">
            A passionate Java Developer driven by a curiosity for crafting robust and scalable applications.
            My foundation in Object-Oriented Programming, data structures, and algorithms meticulously guides every solution I build.
            I specialize in developing efficient RESTful APIs using Spring Boot and ensuring seamless data persistence with SQL databases.
            I also excel in building robust web applications with React, and cloud technologies, 
            transforming complex problems into elegant solutions with a keen eye for user experience.
          </p>
          {/* Action button section */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              View My Work
            </button>
          </div> */}

          {/* Social Media Icons */}
          {/* Icons with system-dependent colors and hover effects */}
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://github.com/vishal6268" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Github size={32} /> {/* GitHub Icon */}
            </a>
            <a href="https://leetcode.com/Choudharyvisha1" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Code size={32} /> {/* LeetCode Icon (using 'Code' as a general coding platform icon) */}
            </a>
            <a href="https://www.hackerrank.com/Choudharyvishal" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Award size={32} /> {/* HackerRank Icon (using 'Award' for achievements/rankings) */}
            </a>
            <a href="https://www.linkedin.com/in/vishal-choudhary-1690202b7" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={32} /> {/* LinkedIn Icon */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
