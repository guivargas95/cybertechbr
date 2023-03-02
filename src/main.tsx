import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './config.css'
import ArticlePage from './pages/articlePage';
import Home from './pages/home';
import ScrollToTop from './components/scrollToTop';
import Privacy from './pages/privacy';
import posthog from 'posthog-js'
import CategoryPage from './pages/CategoryPage';

posthog.init('phc_h7cAp2F62c6KZqTMmYK0nnYuOGK3kCfhcoXpgkdTT7s', { api_host: 'https://app.posthog.com' })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)