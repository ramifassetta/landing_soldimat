import React from 'react';
import post_soldi from '../assets/videos/post_soldi.mp4';
import soldimat_campo from '../assets/videos/soldimat_campo.mp4';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center w-screen overflow-hidden">
      {/* Contenedor de los videos */}
      <div className="absolute inset-0 flex">
        {/* Video de fondo 1 */}
        <video
          className="flex-1 w-1/2 h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src={post_soldi} type="video/mp4" />
          Tu navegador no soporta el elemento <code>video</code>.
        </video>

        {/* Video de fondo 2 */}
        <video
          className="flex-1 w-1/2 h-full object-cover opacity-60"
          autoPlay
          muted
          loop
        >
          <source src={soldimat_campo} type="video/mp4" />
          Tu navegador no soporta el elemento <code>video</code>.
        </video>
      </div>

      {/* Overlay oscuro para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Contenido sobre los videos */}
      <div className="relative z-10 text-white p-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a Nuestro Sitio</h1>
        <p className="text-lg md:text-2xl mb-6">Descubre nuestras increíbles ofertas y servicios diseñados especialmente para ti.</p>
        <a href="#contacto" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out">Contáctanos</a>
      </div>
    </section>
  );
}
