import producto1 from "../assets/images/producto1.png";
import producto2 from "../assets/images/producto2.png";
import producto3 from "../assets/images/producto3.png";
import producto4 from "../assets/images/producto4.png";
import producto5 from "../assets/images/producto5.png";
import producto6 from "../assets/images/producto6.png";
import soldimatrojo from "../assets/images/soldimatrojo-logo.png";

export const Productos = () => {
  return (
    <section className="py-12 w-full flex" id="productos">
      {/* Contenedor principal para las dos columnas */}
      <div className="flex w-full">
        {/* Columna más pequeña para las imágenes */}
        <div className="flex flex-col items-start w-1/3">
          {/* Contenedor interno con el fondo negro */}
          <div className="bg-red-700 p-2 m-auto">
            <div className="bg-black w-fit m-auto p-6">
              <div className="flex flex-col gap-3">
                {/* Producto 1 */}
                <div className="relative group w-64 h-auto">
                  <img
                    src={producto1}
                    alt="Producto 1"
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

                {/* Producto 2 */}
                <div className="relative group w-64 h-auto">
                  <img
                    src={producto2}
                    alt="Producto 2"
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

                {/* Producto 3 */}
                <div className="relative group w-64 h-auto">
                  <img
                    src={producto3}
                    alt="Producto 3"
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
              </div>
            </div>
          </div>
        </div>

        {/* Columna más grande para el contenido adicional */}
        <div className="flex justify-center items-center bg-black p-6 w-2/3">
          <div className="mr-10">
            <h2 className="text-4xl font-bold mb-4 text-white ">
              NUESTROS <span className="text-red-700">SERVICIOS</span>
            </h2>
            <p className="mb-4 text-white text-justify text-2xl">
              Nos especializamos en extintores a medida, adaptados a las
              necesidades específicas de cada cliente. Nuestro equipo de
              expertos se encarga de realizar la instalación profesional y
              asegurar el mantenimiento continuo para que tus extintores siempre
              estén en óptimas condiciones.
            </p>
            <p className="text-white text-justify text-2xl mt-10">
              ¡No esperes más para asegurar tu entorno! Contacta con nosotros
              hoy mismo para obtener más información sobre nuestros servicios y
              cómo podemos ayudarte a mantener la seguridad de tus
              instalaciones. Estamos aquí para brindarte el mejor servicio y
              apoyo en todo momento.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative group w-64 h-auto ">
              <img src={producto4} alt="" className="w-full h-auto object-cover rounded-sm shadow-md"/>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-sm flex justify-center items-center">
                    {/* Logo que aparece en hover */}
                    <img
                      src={soldimatrojo}
                      alt="Logo de la marca"
                      className="w-16 h-auto"
                    />
                  </div>
            </div>
            <div className="relative group w-64 h-auto ">
              <img src={producto5} alt="" className="w-full h-auto object-cover rounded-sm shadow-md"/>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-sm flex justify-center items-center">
                    {/* Logo que aparece en hover */}
                    <img
                      src={soldimatrojo}
                      alt="Logo de la marca"
                      className="w-16 h-auto"
                    />
                  </div>
            </div>
            <div className="relative group w-64 h-auto ">
              <img src={producto6} alt="" className="w-full h-auto object-cover rounded-sm shadow-md"/>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-sm flex justify-center items-center">
                    {/* Logo que aparece en hover */}
                    <img
                      src={soldimatrojo}
                      alt="Logo de la marca"
                      className="w-16 h-auto"
                    />
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
