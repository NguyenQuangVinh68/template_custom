import { createBrowserRouter, Navigate } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";

import NotFound from "../components/NotFound";
import Products from "../views/Products";
import Dashboard from "../views/Dashboard";
import Tables from "../views/Tables";
import Login from "../views/Pages/Login";
import ListMain from "../views/ListMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "table", element: <Tables /> },
      { path: "product", element: <Products /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "listmain/:id", element: <ListMain /> },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
