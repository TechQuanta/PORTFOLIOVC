// EducationExperience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CalendarDays, MapPin } from 'lucide-react'; // Icons for visual appeal

/**
 * EducationExperience Component
 *
 * This component displays the user's education and work experience in an astonishing
 * timeline-like layout. Items alternate between left and right on larger screens,
 * with a central vertical line, and stack vertically on mobile. It features
 * clean design, subtle animations, and system-dependent dark mode support.
 *
 * @param {object} props - The component's properties.
 * @param {boolean} [props.isDarkMode] - Indicates if dark mode is currently active for dynamic styling.
 */
const EducationExperience = ({ isDarkMode }) => {
  // Data for Education
  const education = [
    {
      id: 1,
      degree: "Master of Computer Applications",
      institution: "School of Computer Science and IT, University of DAVV Indore (M.P.)",
      years: "2024 - 2025",
      details: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Optimizing Neural Networks with Quantum Computing principles'."
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications",
      institution: "Govt. (Model, Autonomous) Holkar Science Collage Indore (M.P.)",
      years: "2021 - 2024",
      details: "Graduated with honors. Focused on full-stack web development and data structures. Participated in numerous hackathons."
    }
  ];

  // Data for Experience
  const experience = [
    // {
    //   id: 1,
    //   title: "Senior Software Engineer",
    //   company: "Tech Solutions Inc.",
    //   years: "Jan 2024 - Present",
    //   location: "San Francisco, CA",
    //   responsibilities: [
    //     "Led development of scalable microservices using Node.js and Kubernetes.",
    //     "Implemented CI/CD pipelines, reducing deployment time by 30%.",
    //     "Mentored junior developers and conducted code reviews.",
    //     "Optimized database queries, improving application performance by 25%."
    //   ]
    // },
    // {
    //   id: 2,
    //   title: "Software Developer",
    //   company: "Innovate Labs",
    //   years: "Jul 2022 - Dec 2023",
    //   location: "Seattle, WA",
    //   responsibilities: [
    //     "Developed and maintained responsive user interfaces with React and Redux.",
    //     "Collaborated with product teams to translate requirements into technical specifications.",
    //     "Contributed to API design and implementation using Python/Django.",
    //     "Participated in agile ceremonies and sprint planning."
    //   ]
    // }
  ];

  // Framer Motion variants for section titles
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
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

  return (
    // Main container for the education and experience sections
    <section id="education-experience" className="w-full min-h-screen py-16 px-4 sm:px-8 lg:px-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex flex-col items-center justify-start font-inter overflow-y-auto overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto relative">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>

        {/* Education Section */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center relative pb-4 z-10 bg-gray-100 dark:bg-gray-900 px-4"
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
            <div
              key={edu.id}
              className={`flex w-full relative
                         ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`} // Alternating left/right
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-500 dark:bg-purple-400 border-4 border-gray-100 dark:border-gray-900 z-10 hidden md:flex items-center justify-center">
                <span className="block w-2 h-2 rounded-full bg-white dark:bg-gray-900"></span>
              </div>

              <motion.div
                className={`w-full md:w-[calc(50%-2rem)] transition-colors duration-300 relative
                           ${isDarkMode ? 'dark:text-white' : 'text-gray-900'}
                           hover:translate-y-[-5px] hover:scale-[1.01]`} // Kept hover effects
                variants={index % 2 === 0 ? itemVariants : itemVariantsRight} // Animate from left or right
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Inner content wrapper for consistent padding and shadow on hover */}
                {/* Removed background, border, and shadow from this div */}
                <div className={`p-8 rounded-2xl transition-all duration-300`}>
                  <div className="flex items-center mb-4">
                    <GraduationCap size={32} className="text-purple-600 dark:text-purple-400 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-semibold">{edu.institution}</p>
                  <p className="text-md text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                    <CalendarDays size={18} className="mr-2" /> {edu.years}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{edu.details}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center relative pb-4 z-10 bg-gray-100 dark:bg-gray-900 px-4"
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
            <div
              key={exp.id}
              className={`flex w-full relative
                         ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`} // Alternating left/right (reversed for experience for visual variety)
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-gray-100 dark:border-gray-900 z-10 hidden md:flex items-center justify-center">
                <span className="block w-2 h-2 rounded-full bg-white dark:bg-gray-900"></span>
              </div>

              <motion.div
                key={exp.id}
                className={`w-full md:w-[calc(50%-2rem)] transition-colors duration-300 relative
                           ${isDarkMode ? 'dark:text-white' : 'text-gray-900'}
                           hover:translate-y-[-5px] hover:scale-[1.01]`} // Kept hover effects
                variants={index % 2 === 0 ? itemVariantsRight : itemVariants} // Animate from right or left (reversed)
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Inner content wrapper for consistent padding and shadow on hover */}
                {/* Removed background, border, and shadow from this div */}
                <div className={`p-8 rounded-2xl transition-all duration-300`}>
                  <div className="flex items-center mb-4">
                    <Briefcase size={32} className="text-blue-600 dark:text-blue-400 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2 font-semibold">{exp.company}</p>
                  <p className="text-md text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                    <CalendarDays size={18} className="mr-2" /> {exp.years}
                  </p>
                  <p className="text-md text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                    <MapPin size={18} className="mr-2" /> {exp.location}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
