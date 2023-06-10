import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import PageNotFound from './pages/page-not-found/PageNotFound';
import CatalogPage from './pages/catalog-page/CatalogPage';
import HomePage from './pages/homepage/HomePage';
import ProductPage from './pages/product-page/ProductPage';

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
        },
        {
          path: "catalogo/:id",
          element: <ProductPage />
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