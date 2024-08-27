import post_soldi from '../assets/videos/post_soldi.mp4';
import soldimat_campo from '../assets/videos/soldimat_campo.mp4';

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col overflow-hidden" id="hero">
      {/* Contenedor de los videos */}
      <div className="absolute inset-0 w-full h-full flex">
        {/* Videos de fondo para pantallas grandes */}
        <div className="hidden lg:flex w-full h-full">
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

        {/* Video de fondo único para pantallas móviles */}
        <div className="lg:hidden w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src={soldimat_campo} type="video/mp4" />
            Tu navegador no soporta el elemento <code>video</code>.
          </video>
        </div>
      </div>

      {/* Capa de superposición */}
      <div className="absolute inset-0 bg-black opacity-25"></div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        {/* Contenedor para alinear el texto en la parte superior */}
        <div className="text-center max-w-4xl mx-auto pt-12">
          <p className="text-lg md:text-2xl mb-6 font-semibold text-white">
            LA LÍNEA ENTRE SEGURIDAD Y PELIGRO ES DELGADA.
          </p>
        </div>
        
        {/* Botón pegado al borde inferior */}
        <a
          href="#contacto"
          className="border-4 border-red-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-sm transition duration-300 ease-in-out w-fit mx-auto"
        >
          CONTÁCTANOS
        </a>
      </div>
    </section>
  );
};