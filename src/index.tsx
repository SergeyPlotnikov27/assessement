import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResultsPage from "./pages/ResultsPage";
import './normalize.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
  {
    path: "/*",
    element: <Navigate to="/404" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
