import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import App from './components/app/App';
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
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
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/home",
            element: <PrivateRoute><HomePage/></PrivateRoute>,
        },
        {
            path: "/registration",
            element: <RegistrationPage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
      },
        {
            path: "*",
            element: <ErrorPage />,
        },
    ],
},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
);
