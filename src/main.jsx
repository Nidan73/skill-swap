import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./app/Router/Routes.jsx";
import "animate.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster position="top-right" />
  </StrictMode>,
);
