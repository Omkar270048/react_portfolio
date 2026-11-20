import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App.jsx"
import BlogsPage from "./pages/BlogsPage.jsx"
import BlogPostPage from "./pages/BlogPostPage.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blogs" element={<BlogsPage />} />
        {/* Dynamic route for single blog reading */}
        <Route path="/blogs/:id" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)