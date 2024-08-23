import dudas from "../assets/images/dudas.png";
import instalacion from "../assets/images/instalacion.png";
import mantenimientoYrecarga from "../assets/images/mantenimientoYrecarga.png";
import venta_de_extintores from "../assets/images/venta_de_extintores.png";

export const Galeria = () => {

  const images = [
    dudas,
    instalacion,
    venta_de_extintores,
    mantenimientoYrecarga,
  ];

  return (
    <section className="py-6 px-4 bg-black  ">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-3xl font-bold text-center mb-12">Nuestra Galería</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`Galería imagen ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
