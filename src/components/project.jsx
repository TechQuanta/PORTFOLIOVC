// ProjectsSlider.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

/**
 * ProjectsSlider Component
 *
 * This component displays a carousel of projects with an auto-sliding feature
 * and mouse-grab sliding functionality. Projects animate from bottom to top.
 * Each project is presented with a title, description, image, and links to live demo/GitHub.
 * It is fully responsive and supports system-dependent dark mode theming.
 *
 * @param {object} props - The component's properties.
 * @param {boolean} [props.isDarkMode] - Indicates if dark mode is currently active for dynamic styling.
 */
const ProjectsSlider = ({ isDarkMode }) => {
  // Sample project data. Replace with your actual project details.
  const projects = [
    {
      id: 1,
      title: "AI Resume Builder",
      description: "Resume Builder A Java Spring Boot and React-based project featuring integrated cloud capabilities. It offers a variety of resume templates, a built-in chatbot, project suggestions tailored for students, and an ATS (Applicant Tracking System) score checker with in-depth analysis. The platform also includes intelligent template selection based on defined criteria with project fetching facility.",
      imageUrl: "./Ace.jpg", // Placeholder image
      // liveLink: "https://your-ecommerce-platform.com", // Replace with actual live
      liveLink: "https://aceresume.techquanta.tech/", // Replace with actual live link
      githubLink: "https://github.com/yourusername/ecommerce-platform", // Replace with actual GitHub link
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS",]
    },
    {
      id: 2,
      title: "Real-time code compiler",
      description: " A real-time code compiler application that allows users to write, compile, and execute code in various programming languages. It features a user-friendly interface, syntax highlighting, and instant feedback on code execution. Built with React, API, and Webpack.  ",
      imageUrl: "./compiler.png", // Placeholder image
      liveLink: "https://codecompiler-pearl.vercel.app/", // Replace with actual live link
      // githubLink: "
      githubLink: "https://github.com/yourusername/realtime-chat-app",
      tags: ["React and Vite", "Tailwind CSS","Monaco", "User Auth"]
    },
     {
      id: 3,
      title: "Auth & Resume Extraction Service",
      description: " A comprehensive Java Spring Boot application that integrates Google Drive API for resume storage and Gemini API for resume extraction. It features Firebase Authentication for secure user access, PDFBox for PDF manipulation, and a robust backend architecture. This service automates the process of extracting key information from resumes stored in Google Drive, providing a seamless user experience.",
      imageUrl: "./3rd.jpg", // Placeholder image
      liveLink: "https://api.techquanta.tech/", // Replace with actual live link
      githubLink: "https://github.com/yourusername/portfolio-website",
      tags: ["Java" , "Spring boot" ," Drive API"  ," Gemini API" ," PDFBOX" ," FireBase Auth"]
    },
    //{
    //   id: 4,
    //   title: "Advanced Task Management Tool",
    //   description: "Boost your productivity with this collaborative task management solution. Features include intuitive drag-and-drop task reordering, user assignment, due date tracking, and real-time updates for team collaboration.",
    //   imageUrl: "https://placehold.co/800x500/606060/333333?text=Task+Manager",
    //   liveLink: "#",
    //   githubLink: "https://github.com/yourusername/task-management-tool",
    //   tags: ["React", "Firebase", "Drag-and-Drop", "State Management", "Authentication"]
    // }
  ];

  // State to keep track of the currently displayed project index
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  // State to control the direction of the slide animation (always positive for auto-slide)
  const [direction, setDirection] = useState(1); // Always 1 for bottom-to-top auto-slide

  // States for mouse dragging functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const dragThreshold = 100; // Minimum pixels to drag to trigger a slide

  // Function to navigate to the next project
  const goToNext = () => {
    setDirection(1); // Ensure direction is positive for bottom-to-top
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to the previous project
  const goToPrev = () => {
    setDirection(-1); // Ensure direction is negative for top-to-bottom (reverse)
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality using useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000); // Auto-slide every 4 seconds

    // Cleanup the interval when the component unmounts or when currentProjectIndex changes
    return () => {
      clearInterval(timer);
    };
  }, [currentProjectIndex]); // Dependency on currentProjectIndex resets the timer on each slide

  // Framer Motion variants for bottom-to-top slide animation
  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? "100%" : "-100%", // Enter from bottom (positive direction) or top (negative direction)
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      y: 0, // Center position
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      y: direction < 0 ? "100%" : "-100%", // Exit to bottom (negative direction) or top (positive direction)
      opacity: 0,
      scale: 0.9,
    }),
  };

  // Mouse event handlers for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    // Prevent default to avoid text selection during drag
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const deltaX = currentX - startX;

    if (deltaX > dragThreshold) {
      goToPrev(); // Swiped right, go to previous
    } else if (deltaX < -dragThreshold) {
      goToNext(); // Swiped left, go to next
    }
    // Reset currentX and startX
    setStartX(0);
    setCurrentX(0);
  };

  const handleMouseLeave = () => {
    // End dragging if mouse leaves the element
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
  };

  return (
    // Section for projects, taking full width and height with responsive padding, centered content
    <section id="projects" className="w-full min-h-screen py-16 px-4 sm:px-8 lg:px-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex flex-col items-center justify-center overflow-x-hidden">
      {/* Main slider container, now wider and responsive, with mouse-grab functionality */}
      <div
        className={`relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-2xl transition-colors duration-300 p-6 md:p-10 lg:p-12
        ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
        ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
        min-h-[1000px] md:min-h-[600px] lg:min-h-[600px]`} // Added min-height to prevent elongation
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* AnimatePresence allows components to animate when they enter or exit the DOM */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentProjectIndex} // Key is crucial for AnimatePresence to detect changes
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 }, // Spring animation for Y axis
              opacity: { duration: 0.2 },
              scale: { duration: 0.3 }, // Smooth scale transition
            }}
            // Added 'absolute inset-0' to make the div fill the parent and prevent layout shifts
            className="absolute inset-0 w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 p-6 md:p-10 lg:p-12
                       hover:shadow-xl hover:translate-y-[-8px] hover:rotate-1 transition-all duration-300 ease-in-out" // Astonishing hover effects
          >
            {/* Project Image - larger and prominent */}
            <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
              <img
                src={projects[currentProjectIndex].imageUrl}
                alt={projects[currentProjectIndex].title}
                className={`w-full max-w-lg h-auto object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-1
                  ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} // Dynamically set border color
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x500/CCCCCC/333333?text=Image+Not+Found"; }}
              />
            </div>

            {/* Project Details - text aligned for better readability on large cards */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className={`text-4xl sm:text-5xl font-bold mb-4 leading-tight
                ${isDarkMode ? 'text-white' : 'text-gray-900'}`} // Dynamically set title color
              >
                {projects[currentProjectIndex].title}
              </h3>
              <p className={`mb-6 leading-relaxed text-lg
                ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} // Dynamically set description color
              >
                {projects[currentProjectIndex].description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                {projects[currentProjectIndex].tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-sm font-medium px-4 py-1.5 rounded-full shadow-sm transition-colors duration-300
                      ${isDarkMode ? 'bg-blue-700 text-blue-100' : 'bg-blue-100 text-blue-800'}`} // Dynamically set tag colors
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href={projects[currentProjectIndex].liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
                <a
                  href={projects[currentProjectIndex].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50
                    ${isDarkMode ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-gray-700 hover:bg-gray-800 text-white'}`} // Dynamically set GitHub button colors
                >
                  <Github size={20} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Removed Navigation Arrows */}
      </div>
    </section>
  );
};

export default ProjectsSlider;
