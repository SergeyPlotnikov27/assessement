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
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import './normalize.css';
import {AuthProvider, useAuthContext} from "./context/authContext";

const PrivateRoute = ({children}: {children: React.ReactElement}) => {
  const { isLogin } = useAuthContext()
  if (!isLogin) {
      console.log(isLogin);
      return <Navigate to="/login"/>
  }

  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><HomePage /></PrivateRoute>,
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
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/*",
    element: <Navigate to="/404" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
);
