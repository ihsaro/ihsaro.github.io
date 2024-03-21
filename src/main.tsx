import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home.tsx";
import { ThemeProvider } from "@/contexts/ThemeContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "Projects",
    element: <Projects />,
  },
  {
    path: "",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
