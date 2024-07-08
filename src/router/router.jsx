import { createBrowserRouter, Navigate } from "react-router-dom";

import LayoutAuthen from "../layouts/LayoutAuthen";
import DefaultLayout from "../layouts/DefaultLayout";

import NotFound from "../components/NotFound";
import Products from "../views/Products";
// import Login from "../views/Auth/Login";
// import Register from "../views/Auth/Register";
import Dashboard from "../views/Dashboard";
import Tables from "../views/Tables";
import Login from "../views/Pages/Login";
// import Register from "../views/Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "table", element: <Tables /> },
      { path: "product", element: <Products /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },

  // {
  //   path: "",
  //   element: <LayoutAuthen />,
  //   children: [
  //     { path: "login", element: <Login /> },
  //     { path: "register", element: <Register /> },
  //   ],
  // },

  {
    path: "/login",
    element: <Login />,
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
