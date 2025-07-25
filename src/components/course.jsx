import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, Clock, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'; // Icons for visual appeal

/**
 * Courses Component
 *
 * This component displays a single course in a professional document-like format.
 * It is fully responsive and supports system-dependent dark mode theming.
 * The course includes a prominent title, followed by provider, duration, details,
 * an interactive syllabus dropdown, and a clear link positioned on the right.
 *
 * @param {object} props - The component's properties.
 * @param {boolean} [props.isDarkMode] - Indicates if dark mode is currently active for dynamic styling.
 */
const Courses = ({ isDarkMode }) => {
  // State to manage which syllabus item is open
  const [openSyllabusItem, setOpenSyllabusItem] = useState(null);

  // Sample course data.
  const course = {
    id: 1,
    title: "Complete Java & Spring Boot Developer Course",
    provider: "TECHQUANTA",
    duration: "6 Months",
    link: "https://techquanta.github.io/java-course/", // Replace with actual course link
    details: "Comprehensive course covering Java programming from beginner to senior level and Spring Boot framework. Master core Java concepts, advanced Java features, and build production-ready web applications, RESTful APIs, and microservices using Spring Boot, Spring Data JPA, Spring Security, and modern development practices. This course provided hands-on experience with real-world projects and industry best practices.",
    syllabus: [
      {
        id: 1,
        title: "Core Java Fundamentals (Beginner Level)",
        content: "Java basics including syntax, variables, data types, operators, control structures, loops, arrays, and object-oriented programming concepts like classes, objects, inheritance, polymorphism, encapsulation, and abstraction."
      },
      {
        id: 2,
        title: "Advanced Java Concepts (Intermediate Level)",
        content: "Exception handling, collections framework, generics, multi-threading, file I/O, serialization, reflection API, annotations, lambda expressions, streams API, and functional programming concepts in Java 8+."
      },
      {
        id: 3,
        title: "Enterprise Java & Design Patterns (Advanced Level)",
        content: "Design patterns (Singleton, Factory, Observer, etc.), JDBC, servlets, JSP, Maven/Gradle build tools, JUnit testing, logging frameworks, and enterprise application architecture patterns."
      },
      {
        id: 4,
        title: "Spring Framework & Spring Boot (Senior Level)",
        content: "Spring core concepts, dependency injection, Spring MVC, Spring Boot auto-configuration, creating REST APIs, Spring Data JPA, Spring Security, microservices architecture, and deployment strategies."
      },
      {
        id: 5,
        title: "Database Integration & Advanced Topics",
        content: "Database connectivity with Spring Data JPA, Hibernate ORM, transaction management, caching strategies, working with multiple databases, query optimization, and database migrations."
      },
      {
        id: 6,
        title: "Production & DevOps (Senior Level)",
        content: "Application monitoring, logging, error handling, testing strategies (unit, integration, end-to-end), CI/CD pipelines, Docker containerization, cloud deployment (AWS/Azure), and performance optimization."
      }
    ]
  };

  // Framer Motion variants for section titles
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Framer Motion variants for individual content blocks (for subtle entry animations)
  const contentBlockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const toggleSyllabus = (id) => {
    setOpenSyllabusItem(openSyllabusItem === id ? null : id);
  };

  return (
    <section id="courses" className="w-full min-h-screen py-16 px-4 sm:px-8 lg:px-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex flex-col items-center justify-center font-inter overflow-hidden">

      <div className="w-full max-w-8xl mx-auto relative"> {/* Increased max-w for better layout */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12 p-6 sm:p-8">
          {/* Main Course Content (Left/Center) */}
          <div className="flex-grow">
            {/* Course Title */}
            <motion.div
              variants={contentBlockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-start mb-4"
            >
              <BookOpen size={40} className="text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0" />
              <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight text-left">
                <strong>{course.title}</strong>
              </h3>
            </motion.div>

            {/* Provider and Duration */}
            <motion.div
              variants={contentBlockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6" // Removed ml-14
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold flex items-center">
                <Award size={22} className="mr-2 text-yellow-500 flex-shrink-0" /> <strong>{course.provider}</strong>
              </p>
              <span className="hidden sm:block text-gray-400 dark:text-gray-600">|</span>
              <p className="text-md text-gray-500 dark:text-gray-400 flex items-center">
                <Clock size={20} className="mr-2 flex-shrink-0" /> <strong>{course.duration}</strong>
              </p>
            </motion.div>

            <hr className="my-6 border-gray-300 dark:border-gray-700" /> {/* Removed ml-14 */}

            {/* Course Details (Introduction) */}
            <motion.p
              variants={contentBlockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-8" // Removed ml-14
            >
              {course.details}
            </motion.p>

            <hr className="my-6 border-gray-300 dark:border-gray-700" /> {/* Removed ml-14 */}

            {/* Syllabus Section */}
            <motion.div
              variants={contentBlockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 }}
              className="" // Removed ml-14
            >
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Syllabus</h4>
              <div className="space-y-3">
                {course.syllabus.map((item) => (
                  <div key={item.id} className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleSyllabus(item.id)}
                      className={`flex justify-between items-center w-full p-4 text-left font-semibold text-lg
                                 ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                                 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      <strong>{item.title}</strong>
                      {openSyllabusItem === item.id ? (
                        <ChevronUp size={20} className="text-blue-500 dark:text-blue-300" />
                      ) : (
                        <ChevronDown size={20} className="text-blue-500 dark:text-blue-300" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openSyllabusItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`p-4 border-t ${isDarkMode ? 'border-gray-700 bg-gray-800 text-gray-300' : 'border-gray-200 bg-white text-gray-600'}`}
                        >
                          {item.content}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Course Link (Right Side) */}
          <motion.div
            variants={contentBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="lg:w-1/4 flex-shrink-0 flex lg:flex-col items-center lg:items-end justify-center lg:justify-start mt-8 lg:mt-0"
          >
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 min-w-[180px]"
            >
              <ExternalLink size={20} /> View Course
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Courses;