import producto1 from "../assets/images/producto1.png";
import producto2 from "../assets/images/producto2.png";
import producto3 from "../assets/images/producto3.png";

export const Productos = () => {
  return (
    <section className="py-12 w-full flex">
      {/* Contenedor principal para las dos columnas */}
      <div className="flex w-full">
        {/* Columna más pequeña para las imágenes */}
        <div className="flex flex-col items-start w-1/3">
          {/* Contenedor interno con el fondo negro */}
          <div className="bg-red-700 p-2 m-auto">
            <div className="bg-black w-fit m-auto p-6">
              <div className="flex flex-col gap-3">
                <img
                  src={producto1}
                  alt="Producto 1"
                  className="w-64 h-auto object-cover rounded-sm shadow-md"
                />
                <img
                  src={producto2}
                  alt="Producto 2"
                  className="w-64 h-auto object-cover rounded-sm shadow-md"
                />
                <img
                  src={producto3}
                  alt="Producto 3"
                  className="w-64 h-auto object-cover rounded-sm shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Columna más grande para el contenido adicional */}
        <div className="flex flex-col justify-center bg-gray-200 p-6 w-2/3">
          <h2 className="text-2xl font-bold mb-4">NUESTROS SERVICIOS</h2>
          <p className="mb-4">
            Aquí puedes agregar información adicional sobre los productos, como descripciones, características o cualquier otro detalle relevante que quieras mostrar.
          </p>
          <p>
            Esta sección puede ser utilizada para brindar más detalles o llamar a la acción. Puedes ajustar el contenido según tus necesidades.
          </p>
        </div>
      </div>
    </section>
  );
};
