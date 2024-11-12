import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { ErrorPage, SignUp } from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    future: {
      v7_partialHydration: true,
    },
  }
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </React.StrictMode>
);
