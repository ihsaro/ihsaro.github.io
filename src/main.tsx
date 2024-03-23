import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home.tsx";
import { ThemeProvider } from "@/contexts/ThemeContext";
import WorkExperience from "./pages/WorkExperience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
    {
        path: "work-experience",
        element: <WorkExperience />,
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
