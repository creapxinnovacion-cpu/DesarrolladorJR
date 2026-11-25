import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./assets/components/layout/Navbar";
import Footer from "./assets/components/layout/Footer";
import FloatingWhatsApp from "./assets/components/ui/WhatsAppButton";

// PÁGINAS PRINCIPALES DEL SDD DESARROLLADOR JR
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Equipo from "./pages/Equipo";
import Arquitectura from "./pages/Arquitectura";
import Modulos from "./pages/Modulos";
import Tecnologia from "./pages/tecnologia";
import Calidad from "./pages/Calidad";
import Evidencia from "./pages/Evidencia";
import Contacto from "./pages/contacto";

function ScrollToTopAndTrackPageView() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Google Analytics 4 - Pageview tracking on SPA navigation
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pathname + search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopAndTrackPageView />
      {/* CONTENEDOR GLOBAL DARK BLUEPRINT */}
      <div className="min-h-screen w-full flex flex-col bg-[#08101E] text-[#EBF1FA] selection:bg-[#0A54FA] selection:text-white">
        {/* NAVBAR OFICIAL */}
        <Navbar />

        {/* CONTENIDO CENTRAL */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/arquitectura" element={<Arquitectura />} />
            <Route path="/modulos" element={<Modulos />} />
            <Route path="/portafolio" element={<Navigate to="/modulos" replace />} />
            <Route path="/servicios" element={<Navigate to="/modulos" replace />} />
            <Route path="/soluciones" element={<Navigate to="/arquitectura" replace />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/calidad" element={<Calidad />} />
            <Route path="/evidencia" element={<Evidencia />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* FOOTER OFICIAL */}
        <Footer />

        {/* BOTÓN FLOTANTE WHATSAPP GLOBAL DE ALTA CONVERSIÓN */}
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
