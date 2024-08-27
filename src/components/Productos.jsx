import { primerasTresImagenes, otrasTresImagenes } from '../constants';
import soldimatrojo from "../assets/images/soldimatrojo-logo.png";

export const Productos = () => {
  return (
    <section className="py-12 w-full flex flex-col md:flex-row" id="productos">
      {/* Contenedor principal para las dos columnas */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Columna para las imágenes, oculta en dispositivos móviles */}
        <div className="hidden md:flex flex-col items-start sm:w-full md:w-1/3 lg:w-1/3">
          {/* Contenedor interno con el fondo negro */}
          <div className="bg-red-700 mb-12 p-2 m-auto ">
            <div className="bg-black w-fit sm:w-full m-auto p-6">
              <div className="flex flex-col gap-3">
                {primerasTresImagenes.map((producto, index) => (
                  <div key={index} className="relative group w-64 h-auto">
                    <img
                      src={producto.src}
                      alt={producto.alt}
                      className="w-full h-auto object-cover rounded-sm shadow-md"
                    />
                    {/* Div con opacidad que aparece en hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-sm flex justify-center items-center">
                      {/* Logo que aparece en hover */}
                      <img
                        src={soldimatrojo}
                        alt="Logo de la marca"
                        className="w-16 h-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Columna para el contenido adicional */}
        <div className="flex flex-col sm:flex-row justify-center items-center bg-black p-6 w-full sm:w-2/3 md:w-2/3 lg:w-2/3">
          <div className="w-full sm:w-1/2 lg:mr-10 md:w-full md:ml-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              NUESTROS <span className="text-red-700">SERVICIOS</span>
            </h2>
            <p className="mb-4 text-white text-base sm:text-lg md:text-2xl text-start">
              Nos especializamos en extintores a medida, adaptados a las
              necesidades específicas de cada cliente. Nuestro equipo de
              expertos se encarga de realizar la instalación profesional y
              asegurar el mantenimiento continuo para que tus extintores siempre
              estén en óptimas condiciones.
            </p>
            {/* Segundo párrafo oculto en dispositivos móviles */}
            <p className="hidden md:block text-white text-base sm:text-lg md:text-2xl mt-10 text-start">
              ¡No esperes más para asegurar tu entorno! Contactanos
              hoy mismo para obtener más información sobre nuestros servicios y
              cómo podemos ayudarte a mantener la seguridad de tus
              instalaciones. Estamos para brindarte el mejor servicio y
              apoyo en todo momento.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:hidden mt-3 md:mt-0 md:w-1/2 lg:flex items-end lg:w-fit">
            {otrasTresImagenes.map((producto, index) => (
              <div key={index} className="relative group w-64 h-auto">
                <img
                  src={producto.src}
                  alt={producto.alt}
                  className="w-full h-auto object-cover rounded-sm shadow-md"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-sm flex justify-center items-center">
                  {/* Logo que aparece en hover */}
                  <img
                    src={soldimatrojo}
                    alt="Logo de la marca"
                    className="w-16 h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


