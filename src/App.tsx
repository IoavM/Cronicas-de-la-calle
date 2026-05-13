import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './Styles/global.css';

/* Lazy-loaded pages for performance */
const Home = lazy(() => import('./Pages/Home'));
const Metro = lazy(() => import('./Pages/Metro'));
const PlazaBotero = lazy(() => import('./Pages/PlazaBotero'));
const Atanasio = lazy(() => import('./Pages/Atanasio'));

function LoadingFallback() {
  return (
    <div className="loading-screen">
      <div className="loading-screen__content">
        <span className="loading-screen__icon">◈</span>
        <p className="loading-screen__text">Cargando experiencia...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metro" element={<Metro />} />
          <Route path="/plaza-botero" element={<PlazaBotero />} />
          <Route path="/atanasio" element={<Atanasio />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
