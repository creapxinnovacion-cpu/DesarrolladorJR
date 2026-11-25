import { useState, useRef } from "react";
import { animate, remove } from "animejs";

// Importar imágenes de mantenimiento
import img01 from "../ImgMantenimiento/01.jpeg";
import img02 from "../ImgMantenimiento/02.jpeg";
import img03 from "../ImgMantenimiento/03.jpeg";
import img04 from "../ImgMantenimiento/04.jpeg";
import img05 from "../ImgMantenimiento/05.jpeg";
import img06 from "../ImgMantenimiento/06.jpeg";
import img07 from "../ImgMantenimiento/07.jpeg";
import img08 from "../ImgMantenimiento/08.jpeg";
import img09 from "../ImgMantenimiento/09.jpeg";
import imgCajul from "../ImgMantenimiento/cajul.jpg";

const galleryItems = [
  { src: img01, caption: "Inspección inicial y diagnóstico de hardware de la computadora." },
  { src: img02, caption: "Desmontaje completo y organización ordenada de tornillos y piezas." },
  { src: img03, caption: "Limpieza profunda de disipadores y ventiladores con aire y cepillos." },
  { src: img04, caption: "Eliminación completa de acumulación de polvo en placa madre." },
  { src: img05, caption: "Aplicación de pasta térmica de alta conductividad en CPU y GPU." },
  { src: img06, caption: "Reensamblaje meticuloso y verificación de conexiones eléctricas." },
  { src: img07, caption: "Optimización del flujo de aire interno y gestión de cableado." },
  { src: img08, caption: "Limpieza física externa del chasis y pulido de acrílicos." },
  { src: img09, caption: "Pruebas de encendido, configuración de BIOS y optimización de drivers." },
  { src: imgCajul, caption: "Prueba final de estrés y control de temperatura bajo carga máxima." }
];

export default function MaintenanceGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardImgRef = useRef(null);

  // Animación del slider interno al cambiar de imagen
  const animateCardSlide = (direction) => {
    if (!cardImgRef.current) return;
    
    const translateVal = direction === "next" ? [-20, 0] : [20, 0];
    
    try {
      remove(cardImgRef.current);
      animate(cardImgRef.current, {
        translateX: translateVal,
        opacity: [0.6, 1],
        scale: [0.98, 1],
        duration: 350,
        ease: "easeOutCubic"
      });
    } catch {
      // Fallback seguro sin animejs si falla
    }
  };

  const handleCardNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    animateCardSlide("next");
  };

  const handleCardPrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    animateCardSlide("prev");
  };

  return (
    <div className="relative h-60 w-full overflow-hidden bg-slate-950 rounded-xl select-none group">
      <img
        ref={cardImgRef}
        src={galleryItems[currentIndex].src}
        alt={`Mantenimiento paso ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
        loading="lazy"
      />
      
      {/* Capa degradada de oscurecimiento */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

      {/* Textos y tags de navegación sobrepuestos */}
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="text-[10px] font-bold tracking-wider text-white bg-blue-600 px-2 py-0.5 rounded-full uppercase shadow">
          Galería activa
        </span>
        <span className="text-[10px] font-bold text-gray-200 bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
          {currentIndex + 1} / {galleryItems.length}
        </span>
      </div>

      {/* Caption descriptivo inferior */}
      <div className="absolute bottom-3 left-4 right-4 text-left pointer-events-none">
        <p className="text-xs text-gray-200 font-medium italic line-clamp-2">
          "{galleryItems[currentIndex].caption}"
        </p>
      </div>

      {/* Botones de navegación (Anterior / Siguiente) siempre visibles y cómodos */}
      <button
        type="button"
        onClick={handleCardPrev}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110 active:scale-95 cursor-pointer z-10 shadow-lg"
        title="Anterior foto"
        aria-label="Foto anterior"
      >
        ❮
      </button>
      <button
        type="button"
        onClick={handleCardNext}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-blue-600 text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110 active:scale-95 cursor-pointer z-10 shadow-lg"
        title="Siguiente foto"
        aria-label="Siguiente foto"
      >
        ❯
      </button>
    </div>
  );
}

