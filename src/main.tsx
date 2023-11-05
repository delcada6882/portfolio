// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import {
  BrowserRouter,
  Navigate,
  Route,
  // RouterProvider,
  Routes,
  // createBrowserRouter,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//   element: },
//   {
//     path: "/portfolio",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <div>Make about</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/portfolio" element={<App />} />
      <Route path="/about" element={<div>Make about</div>} />
      <Route path="/" element={<Navigate to="/portfolio" replace />} />
    </Routes>
  </BrowserRouter>
);
