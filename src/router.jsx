import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout'; // Assuming layout.jsx is in the same directory as routes.jsx

// Import your page components
import INTRO from './componant/intro';
import PROJECTS from './componant/project';
import EANDE from './componant/eande'; // Education and Experience
import COURSE from './componant/course';
import RESUME from './componant/resume'; // Assuming you'll create a resume component

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
      {
        path: 'resume', // Route for the Resume page
        element: <RESUME />
      }
    ]
  }
]);

export default router;
