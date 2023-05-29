import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import PageNotFound from './components/pages/PageNotFound';
import CatalogPage from './components/pages/CatalogPage';
import HomePage from './components/pages/HomePage';

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/catalogo",
          element: <CatalogPage />
        }
      ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);