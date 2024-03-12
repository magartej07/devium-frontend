import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Verify from "./Pages/Auth/Verify";
import AuthLayout from "./Layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "auth",
        element:<AuthLayout/>,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
          {
            path: "verify",
            element: <Verify />,
          },
        ],
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};
export default Routes;
