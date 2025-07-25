// ContactFormModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react'; // Import icons for close and send buttons
import { motion } from 'framer-motion'; // Import Framer Motion

/**
 * ContactFormModal Component
 *
 * This component renders an interactive contact form within a modal dialog.
 * It includes input fields for name, email, and message,
 * along with basic form validation and status messages.
 * The modal can be opened and closed via props.
 *
 * @param {object} props - The component's properties.
 * @param {boolean} props.show - Controls the visibility of the modal.
 * @param {function} props.onClose - Callback function to close the modal.
 * @param {boolean} [props.isDarkMode] - Indicates if dark mode is currently active for dynamic styling.
 */
const ContactFormModal = ({ show, onClose, isDarkMode }) => {
  // State for managing form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for managing form submission status ('error' for local validation, or null)
  const [submitStatus, setSubmitStatus] = useState(null); // 'error', null

  // Effect to reset form status when the modal is opened/closed
  useEffect(() => {
    if (!show) {
      // Reset form data and status when modal closes
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setSubmitStatus(null);
    }
  }, [show]);

  // Handle input changes for the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (now primarily for local validation before Web3Forms handles submission)
  const handleSubmit = (e) => {
    // Basic validation before allowing Web3Forms to take over
    if (!formData.name || !formData.email || !formData.message) {
      e.preventDefault(); // Prevent Web3Forms submission if local validation fails
      setSubmitStatus('error');
      return;
    }
    // If validation passes, allow the form to submit to Web3Forms normally.
    // Web3Forms will handle the actual HTTP POST and redirection.
  };

  // Framer Motion variants for form elements animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger animation for child elements
      }
    }
  };

  // If the modal is not meant to be shown, return null to render nothing
  if (!show) {
    return null;
  }

  return (
    // Fixed overlay for the modal, covering the entire viewport
    <div className="fixed inset-0 bg-black bg-opacity-70 dark:bg-opacity-80 flex items-center justify-center p-4 z-50 backdrop-blur-sm transition-all duration-300">
      {/* Modal content container with responsive styling and Framer Motion animations */}
      <motion.div
        className={`relative w-full max-w-md rounded-3xl shadow-2xl transition-colors duration-300 transform
                    ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
                    p-8 sm:p-10 border-4`} // Added border-4 for more emphasis
        initial={{ scale: 0.8, opacity: 0, y: 50 }} // Initial state: slightly smaller, hidden, lower
        animate={{ scale: 1, opacity: 1, y: 0 }}    // Animate to full size, visible, centered
        exit={{ scale: 0.8, opacity: 0, y: 50 }}    // Exit state: back to initial
        transition={{ duration: 0.4, ease: "easeOut" }} // Smoother transition
      >
        {/* Close button for the modal */}
        <button
          onClick={onClose} // Call the onClose prop when the button is clicked
          className="absolute top-5 right-5 text-gray-500 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 transform hover:scale-125 hover:rotate-90 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          aria-label="Close contact form"
        >
          <X size={28} /> {/* Larger X icon for closing */}
        </button>

        {/* Modal title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 text-center leading-tight">
          Get in Touch!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8 text-lg sm:text-xl">
          I'd love to hear from you.
        </p>

        {/* Contact form with Framer Motion container animation, now integrated with Web3Forms */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6" // Default vertical spacing
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          action="https://api.web3forms.com/submit" // Web3Forms action
          method="POST" // Web3Forms method
        >
          {/* Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="4b56c085-50a4-4416-b67a-8ab111048806" /> {/* REMEMBER TO REPLACE THIS! */}

          {/* Container for horizontal fields on medium screens and up */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:gap-y-6 md:gap-x-8">
            {/* Name Input Field */}
            <motion.div className="space-y-2 w-full md:w-[calc(50%-1rem)]" variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-3 focus:ring-blue-500 focus:border-blue-500 sm:text-base bg-gray-50 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
                placeholder="Your Full Name" // More descriptive placeholder
                required
              />
            </motion.div>

            {/* Email Input Field */}
            <motion.div className="space-y-2 w-full md:w-[calc(50%-1rem)]" variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-3 focus:ring-blue-500 focus:border-blue-500 sm:text-base bg-gray-50 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
                placeholder="your.email@example.com"
                required
              />
            </motion.div>
          </div>

          {/* Message Textarea Field - always full width */}
          <motion.div className="space-y-2 w-full" variants={itemVariants}>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6" // Slightly increased rows for more message space
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-3 focus:ring-blue-500 focus:border-blue-500 sm:text-base bg-gray-50 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-y min-h-[120px] transition-all duration-300"
              placeholder="Tell me about your project or inquiry..." // More descriptive placeholder
              required
            ></textarea>
          </motion.div>

          {/* Web3Forms Redirect */}
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          {/* Form Status Message (only for local validation errors) */}
          {submitStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-base font-semibold bg-red-100 dark:bg-red-700 text-red-700 dark:text-red-200 p-3 rounded-lg border border-red-300 dark:border-red-600 mt-6 transition-colors duration-300"
            >
              Please fill in all fields.
            </motion.p>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:translate-y-0 active:shadow-inner tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // Dynamic background color based on theme using inline style for gradients
            style={{
              background: isDarkMode
                ? 'linear-gradient(45deg, #a855f7, #c084fc)' // Purple gradient for dark mode
                : 'linear-gradient(45deg, #3b82f6, #2563eb)' // Blue gradient for light mode
            }}
          >
            <Send size={20} /> Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactFormModal;