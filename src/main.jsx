import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import './index.css'
import App from './App.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import Projects from './projects.jsx'

/* 🔴 Redirect to new website */
function RedirectToNewSite() {
  useEffect(() => {
    window.location.replace('https://somasekar.vercel.app/');
  }, []);

  return null;
}

/* 🔁 Redirect old paths */
function OldRedirectHandler() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const temp = path.split('/');
    const lastSegment = temp.pop();
    const laastSecondSegment = temp.pop();

    const validRoutes = ["home", "about", "contact", "projects"];

    if (validRoutes.includes(lastSegment) && laastSecondSegment!=="old") {
      window.location.replace(`/old/${lastSegment}`);
    }
  }, [location.pathname]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <Router>
    <OldRedirectHandler />

    <Routes>
      <Route path="/" element={<RedirectToNewSite />} />

      <Route path="/old" element={<App />} />
      <Route path="/old/home" element={<App />} />
      <Route path="/old/about" element={<About />} />
      <Route path="/old/contact" element={<Contact />} />
      <Route path="/old/projects" element={<Projects />} />
    </Routes>
  </Router>
);
