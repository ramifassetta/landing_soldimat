import post_soldi from '../assets/videos/post_soldi.mp4';
import soldimat_campo from '../assets/videos/soldimat_campo.mp4';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center  overflow-hidden">
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

      <div className="absolute inset-0 bg-black opacity-25"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full p-6">
        {/* Contenedor para alinear el texto y el botón */}
        <div className="flex flex-col items-start mt-auto mb-16">
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a Nuestro Sitio</h1> */}
          <p className="text-lg md:text-2xl mb-6 font-semibold text-white">Descubre nuestras increíbles ofertas y servicios diseñados especialmente para ti.</p>
        </div>
        {/* Botón pegado al borde inferior */}
        <a href="#contacto" className=" border-4 border-red-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-sm transition duration-300 ease-in-out absolute bottom-6">
          CONTÁCTANOS
        </a>
      </div>
    </section>
  );
};
