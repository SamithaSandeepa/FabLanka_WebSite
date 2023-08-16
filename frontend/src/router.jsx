import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "./containers/client/Home";
import Location from "./containers/client/Home";
import Login from "./containers/loginpages/Login";
import Signup from "./containers/loginpages/Signup";
import Activate from "./containers/loginpages/Activate";
import ResetPassword from "./containers/loginpages/ResetPassword";
import ResetPasswordConfirm from "./containers/loginpages/ResetPasswordConfirm";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/reset-password", element: <ResetPassword /> },
  {
    path: "/password/reset/confirm/:uid/:token",
    element: <ResetPasswordConfirm />,
  },
  { path: "/activate/:uid/:token", element: <Activate /> },
  { path: "/location", element: <Location /> },
  { path: "*", element: <Navigate to="/" /> },
]);

export default router;
