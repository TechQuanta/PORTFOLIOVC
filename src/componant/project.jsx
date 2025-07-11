import React, { useState } from 'react';

const Contact = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend service
        console.log('Form Submitted:', formData);
        // For demonstration, we'll just close the modal.
        // In a real application, you might show a success message or handle errors.
        onClose();
        // Clear form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="modal-content">
            <span className="close-modal" onClick={onClose}>&times;</span>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-input"
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
