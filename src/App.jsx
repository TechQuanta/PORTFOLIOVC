import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router'; // Import the router configuration

function App() {
  // RouterProvider makes the router available throughout your component tree
  return <RouterProvider router={router} />;
}

export default App;
