import React from 'react';
// Assuming your Navbar component is in the same directory or correctly imported
import Navbar from './NavBar/navbar'; // Adjust path if necessary
import { FileText } from 'lucide-react'; // Import FileText icon for the resume link

const PortfolioPage = () => {
    return (
        <>
            <Navbar /> {/* Your fixed, divine navbar */}
            <main className="portfolio-content">
                {/* Profile Section - ID matches Navbar link */}
                <section id="profile" className="content-section animated fade-in-up">
                    <div style={{ maxWidth: '1024px', width: '100%', textAlign: 'center', padding: '0 1rem' }}>
                        {/* Visually hidden title for accessibility, as the main heading is within the profile-header */}
                        <h1 className="section-title sr-only">Profile</h1>

                        <div className="profile-header" style={{ marginBottom: '3rem' }}>
                            {/* Main Profile Picture for this section */}
                            <div className="main-profile-pic-container">
                                <img
                                    src="https://placehold.co/150x150/3b82f6/FFFFFF?text=JP" // Placeholder: replace with your actual profile picture URL
                                    alt="Your Name - Profile"
                                    className="main-profile-pic"
                                />
                            </div>
                            {/* Main Heading */}
                            <h2 style={{ fontSize: 'var(--font-2xl)', fontWeight: '800', marginTop: '1.5rem', color: 'var(--clr-primary-dark)' }}>
                                John Doe {/* Replace with your actual Name */}
                            </h2>
                            <p style={{ fontSize: 'var(--font-lg)', color: 'var(--clr-text-muted-light)' }}>
                                Passionate Java Developer
                            </p>
                        </div>

                        {/* Intro Section */}
                        <div className="card animated fade-in-left">
                            <h3 className="project-title">Introduction</h3>
                            <p className="project-description">
                                **Passionate about building Java applications** with solid fundamentals in OOP, data structures, and algorithms.
                                I'm an enthusiastic computer science graduate passionate about Java development. My journey with Java began during my academic projects where I appreciated its robustness and platform independence.
                            </p>
                        </div>

                        {/* Summary Section */}
                        <div className="card animated fade-in-right" style={{ marginTop: '2rem' }}>
                            <h3 className="project-title">Summary</h3>
                            <p className="project-description">
                                I have hands-on experience building projects using core Java, OOP concepts and basic Spring Framework. Eager to apply my theoretical knowledge in a professional environment and grow as a Java developer.
                                When I'm not coding, you can find me expanding my knowledge through online courses, working on personal projects, or participating in coding challenges.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects Section - ID matches Navbar link */}
                <section id="projects" className="content-section">
                    <h2 className="section-title">My Projects</h2>
                    {/* Example Project Card - Duplicate and fill with your projects */}
                    <div className="card project-card-item animated fade-in-up">
                        <div className="project-image-wrapper">
                            <img
                                src="https://placehold.co/400x250/dbeafe/2563eb?text=Java+App"
                                alt="Project Placeholder"
                                className="project-image"
                            />
                        </div>
                        <h3 className="project-title">E-commerce Backend Service</h3>
                        <p className="project-description">
                            Developed a robust backend for an e-commerce platform using Spring Boot, RESTful APIs, and PostgreSQL. Implemented secure user authentication and order processing.
                        </p>
                        <div className="project-tags">
                            <span className="project-tag">Java</span>
                            <span className="project-tag">Spring Boot</span>
                            <span className="project-tag">REST API</span>
                            <span className="project-tag">PostgreSQL</span>
                        </div>
                    </div>
                    {/* Add more project cards here */}
                </section>

                {/* Education & Experience Section - ID matches Navbar link */}
                <section id="experience" className="content-section">
                    <h2 className="section-title">Education & Experience</h2>
                    {/* Example Education Card */}
                    <div className="card animated fade-in-left">
                        <h3 className="project-title">Bachelor of Technology in Computer Science</h3>
                        <p className="project-description">
                            **University Name** | 2019 - 2023 <br />
                            *Specialized in Software Engineering, focused on Object-Oriented Design and Data Structures.*
                        </p>
                    </div>
                    {/* Example Experience Card */}
                    <div className="card animated fade-in-right">
                        <h3 className="project-title">Junior Java Developer (Internship)</h3>
                        <p className="project-description">
                            **Tech Solutions Inc.** | June 2023 - Dec 2023 <br />
                            *Contributed to the development of a microservices-based application, assisting in API design and unit testing.*
                        </p>
                    </div>
                </section>

                {/* Courses Section - ID matches Navbar link */}
                <section id="courses" className="content-section">
                    <h2 className="section-title">Courses & Certifications</h2>
                    {/* Example Course Card */}
                    <div className="card animated fade-in-up">
                        <h3 className="project-title">Spring & Hibernate for Beginners</h3>
                        <p className="project-description">
                            **Udemy** | Completed: March 2024 <br />
                            *Comprehensive course covering Spring Core, MVC, Data JPA, and Hibernate ORM.*
                        </p>
                    </div>
                    {/* Example Certification Card */}
                    <div className="card animated fade-in-up">
                        <h3 className="project-title">Oracle Certified Associate, Java SE 8 Programmer</h3>
                        <p className="project-description">
                            **Oracle** | Issued: January 2024 <br />
                            *Validated foundational knowledge in Java programming.*
                        </p>
                    </div>
                </section>

                {/* Resume Section - ID matches Navbar link */}
                <section id="resume" className="content-section">
                    <h2 className="section-title">Resume</h2>
                    <div className="card animated fade-in-up" style={{ textAlign: 'center' }}>
                        <p className="project-description">
                            For a comprehensive overview of my skills and experience, please download my resume.
                        </p>
                        <a
                            href="/path/to/your/resume.pdf" // IMPORTANT: Replace with the actual path to your PDF resume file
                            download="John_Doe_Java_Developer_Resume.pdf"
                            className="contact-slider" // Reusing the contact-slider style for a prominent button
                            style={{ margin: '2rem auto 0 auto', width: 'auto', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <FileText size={24} style={{ marginRight: '0.75rem' }} /> Download Resume
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PortfolioPage;