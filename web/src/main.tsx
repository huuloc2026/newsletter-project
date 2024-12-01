import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { ErrorPage, SignUp, Confirmation } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/confirm-email-sent", 
    element: <Confirmation />, 
    errorElement: <ErrorPage />, 
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
