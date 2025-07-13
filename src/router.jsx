// src/router.js
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout'; // Assuming layout.jsx is in the same directory as routes.jsx

// Import your page components - ✨ Corrected typo from 'components' to 'components' ✨
import INTRO from './components/intro.jsx'; // Assuming you move intro.js to src/components/intro.js
import PROJECTS from './components/project';
import EANDE from './components/eande'; // Education and Experience
import COURSE from './components/course';
// import RESUME from './components/resume'; // Assuming you'll create a resume component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // The Layout component will render the Navbar and the current page
    children: [
      {
        index: true, // This makes INTRO the default component rendered at the base path "/"
        element: <INTRO />
      },
      {
        path: 'projects', // Route for the Projects page
        element: <PROJECTS />
      },
      {
        path: 'experience', // Route for the Education & Experience page (using 'experience' for clarity)
        element: <EANDE />
      },
      {
        path: 'courses', // Route for the Courses page
        element: <COURSE />
      },
      // Add more routes here as needed
    ]
  }
]);

export default router;
