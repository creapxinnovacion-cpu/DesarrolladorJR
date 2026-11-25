import { CONTACT_INFO } from "../../../data/modulesData";

export function WhatsAppIcon({ className = "w-5 h-5", size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  return (
    <a
      href={`${CONTACT_INFO.whatsappLink}?text=Hola%20Cristian,%20quisiera%20consultar%20sobre%20un%20proyecto%20con%20Desarrollador%20JR.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Cristian Cajul por WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group flex items-center justify-center p-3 sm:px-4 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-sans font-bold shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 border-2 border-[#08101E] focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08101E]"
    >
      <WhatsAppIcon className="w-6 h-6 sm:w-5 sm:h-5 fill-slate-950" size={24} />
      <span className="hidden sm:inline-block ml-2 text-xs uppercase tracking-wider font-extrabold text-slate-950">
        WhatsApp
      </span>
    </a>
  );
}

