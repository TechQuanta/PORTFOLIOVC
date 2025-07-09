document.addEventListener('DOMContentLoaded', function() {
    // --- Data Definitions (for dynamic content) ---

    const navLinksData = [
        { id: "intro", text: "Intro", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>' },
        { id: "summary", text: "Summary", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>' },
        { id: "projects", text: "Projects", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>' },
        { id: "courses", text: "Courses", icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>' }
    ];

    const skillsData = [
        {
            title: "Frontend",
            description: "React, Vue.js, HTML5, CSS3, JavaScript",
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />'
        },
        {
            title: "Backend",
            description: "Node.js, Python (Django/Flask), PHP (Laravel), REST APIs",
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />'
        },
        {
            title: "Databases",
            description: "MongoDB, PostgreSQL, MySQL, Firebase",
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10m0 0h16m-4 0l-3-3m3 3l-3 3M4 17l3-3m-3 3l3 3" />'
        },
        {
            title: "Tools & DevOps",
            description: "Git, Docker, AWS, Vercel, CI/CD, Webpack",
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />'
        }, {
            title: "Tools & DevOps",
            description: "Git, Docker, AWS, Vercel, CI/CD, Webpack",
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />'
        }, {
            title: "Tools & DevOps",
            description: "Git, Docker, AWS, Vercel, CI/CD, Webpack",
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />'
        }
    ];

    const projectsData = [
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a3313cd-788f-4862-99dd-bdd7ebdeacc8.png",
            alt: "E-commerce platform dashboard",
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with payment processing, inventory management, and customer analytics.",
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec45840c-7d29-4271-ad52-5e2182837386.png",
            alt: "Mobile application interface showing fitness tracking and workout planning features",
            title: "Fitness Mobile App",
            description: "Cross-platform fitness application with workout tracking, nutrition planning, and progress analytics.",
            tags: ["React Native", "Firebase", "Redux"]
        }
    ];

    const coursesData = [
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f3b25fd3-3b46-472c-a851-90476b6c1d10.png",
            alt: "Advanced JavaScript course certificate with modern coding concepts illustration",
            title: "Advanced JavaScript",
            description: "Master advanced JavaScript concepts including closures, prototypes, and async programming.",
            status: "Completed"
        },
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e97e18f-1cc8-4fe4-9d6e-f0c83719acb5.png",
            alt: "React Hooks deep dive course certificate with component examples",
            title: "React Hooks Deep Dive",
            description: "Comprehensive guide to React Hooks, from basic useState to advanced custom hooks.",
            status: "Completed"
        },
        {
            image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/54d6847c-a305-4aaa-9661-bd01cb333c3e.png",
            alt: "UI/UX Design Principles course certificate with minimalist design examples",
            title: "UI/UX Design Principles",
            description: "Fundamentals of user interface design and creating optimal user experiences.",
            status: "Completed"
        }
    ];


    // --- DOM Elements ---
    const navbar = document.querySelector('.navbar');
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const navbarNav = document.getElementById('navbarNav');
    const skillsContainer = document.getElementById('skillsContainer');
    const projectsContainer = document.getElementById('projectsContainer');
    const coursesContainer = document.getElementById('coursesContainer');

    const contactTrigger = document.getElementById('contactTrigger');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');

    const messageModal = document.getElementById('messageModal');
    const messageModalTitle = document.getElementById('messageModalTitle');
    const messageModalBody = document.getElementById('messageModalBody');
    const closeMessageModal = document.getElementById('closeMessageModal');
    const messageModalCloseButton = document.getElementById('messageModalCloseButton');

    // --- Utility Functions ---

    // Function to show custom message modal
    function showMessage(title, message) {
        messageModalTitle.textContent = title;
        messageModalBody.textContent = message;
        messageModal.style.display = 'flex'; // Show the modal
    }

    // --- Dynamic Content Rendering Functions ---

    function renderNavbarLinks() {
        if (!navbarNav) {
            console.error("Navbar navigation container not found!");
            return;
        }
        navLinksData.forEach(link => {
            const a = document.createElement('a');
            a.href = `#${link.id}`;
            // Removed 'my-4 md:my-4' from here to allow CSS to control spacing
            a.className = 'nav-link text-slate-600 hover:text-blue-600 transition relative';
            a.innerHTML = `
                <svg class="nav-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${link.icon}
                </svg>
            `;
            navbarNav.appendChild(a);
        });
    }

    function renderSkills() {
        if (!skillsContainer) {
            console.error("Skills container not found!");
            return;
        }
        skillsData.forEach((skill, index) => {
            const skillCard = document.createElement('div');
            skillCard.className = `skill-card bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 opacity-0 fade-in-up`;
            skillCard.style.transitionDelay = `${index * 0.1}s`; // Staggered animation
            skillCard.innerHTML = `
                <div class="text-blue-600 mb-3">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        ${skill.icon}
                    </svg>
                </div>
                <h3 class="font-bold text-lg mb-2">${skill.title}</h3>
                <p class="text-slate-600">${skill.description}</p>
            `;
            skillsContainer.appendChild(skillCard);
            observer.observe(skillCard); // Observe for animation
        });
    }

   // ... (rest of your script.js code)

function renderProjects() {
    console.log("Attempting to render projects...");
    if (!projectsContainer) {
        console.error("Projects container (projectsContainer) not found!");
        return;
    }
    projectsContainer.innerHTML = ''; // Clear existing content
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        // Replaced Tailwind classes with custom classes
        projectCard.className = `project-card-item opacity-0 fade-in-up`;
        projectCard.style.transitionDelay = `${index * 0.1}s`; // Staggered animation
        projectCard.innerHTML = `
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.alt}" class="project-image" />
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
        `;
        projectsContainer.appendChild(projectCard);
        observer.observe(projectCard); // Observe for animation
    });
    console.log("Projects rendered.");
}

// ... (rest of your script.js code)

    function renderCourses() {
        if (!coursesContainer) {
            console.error("Courses container not found!");
            return;
        }
        coursesData.forEach((course, index) => {
            const courseCard = document.createElement('div');
            courseCard.className = `card opacity-0 fade-in-up`;
            courseCard.style.transitionDelay = `${index * 0.1}s`; // Staggered animation
            courseCard.innerHTML = `
                <div class="mb-4 overflow-hidden rounded-lg">
                    <img src="${course.image}" alt="${course.alt}" class="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <h3 class="text-xl font-bold mb-2">${course.title}</h3>
                <p class="text-slate-600 mb-4">${course.description}</p>
                <span class="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">${course.status}</span>
            `;
            coursesContainer.appendChild(courseCard);
            observer.observe(courseCard); // Observe for animation
        });
    }


    // --- Event Listeners ---

    // Mobile Navbar Toggle
    if (mobileMenuButton && navbar) {
        mobileMenuButton.addEventListener('click', function() {
            navbar.classList.toggle('is-active');
            const icon = mobileMenuButton.querySelector('svg');
            if (navbar.classList.contains('is-active')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>'; // X icon
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>'; // Hamburger icon
            }
        });
    }

    // Contact Modal Functionality
    if (contactTrigger && contactModal && closeModal) {
        contactTrigger.addEventListener('click', function() {
            contactModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', function() {
            contactModal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });
    } else {
        console.error("Contact modal elements not found!");
    }


    // Custom Message Modal Functionality
    if (messageModal && closeMessageModal && messageModalCloseButton) {
        closeMessageModal.addEventListener('click', function() {
            messageModal.style.display = 'none';
        });

        messageModalCloseButton.addEventListener('click', function() {
            messageModal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === messageModal) {
                messageModal.style.display = 'none';
            }
        });
    } else {
        console.error("Message modal elements not found!");
    }


    // Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            console.log('Email:', email);
            console.log('Message:', message);
            showMessage('Message Sent!', 'Thank you for your message. I will get back to you soon!');
            contactForm.reset();
            contactModal.style.display = 'none';
        });
    } else {
        console.error("Contact form not found!");
    }


    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // If mobile navbar is open, close it after clicking a link
                if (navbar.classList.contains('is-active')) {
                    navbar.classList.remove('is-active');
                    mobileMenuButton.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                }
            }
        });
    });

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial observation for elements that might be in view on load (e.g., Intro section)
    // These are static in HTML, so observe them directly.
    document.querySelectorAll('#intro .fade-in-left, #intro .fade-in-right').forEach(el => {
        observer.observe(el);
    });

    // --- Initial Render Calls ---
    // These must be called after DOM is ready and before observing dynamically added elements
    renderNavbarLinks();
    renderSkills();
    renderProjects();
    renderCourses();

    // Note: Observation for dynamically added elements (.fade-in-up) is now
    // handled directly within their respective render functions.
});
