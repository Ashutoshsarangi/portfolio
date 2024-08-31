import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./portfolio/component/About/about";
import Project from "./portfolio/component/Project/Project";
import Home from "./portfolio/component/Home/Home";
import App from "./App";
import "./index.css";
import Publication from "./portfolio/component/Publication/Publication";
import Contact from "./portfolio/component/contact/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "publications",
        element: <Publication />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
