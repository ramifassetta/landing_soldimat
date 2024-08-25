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
    <section className="py-6 px-4 bg-black" id="galeria">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative overflow-hidden group">
              <img
                src={src}
                alt={`Galería imagen ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
              />

              <div className="absolute inset-0 bg-black opacity-50 transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-top-left rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
