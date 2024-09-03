

// Aquí puedes reemplazar las URLs con las de tus imágenes de productos
const productos = [
  "https://via.placeholder.com/300?text=Producto+1",
  "https://via.placeholder.com/300?text=Producto+2",
  "https://via.placeholder.com/300?text=Producto+3",
  "https://via.placeholder.com/300?text=Producto+4",
  "https://via.placeholder.com/300?text=Producto+5",
  "https://via.placeholder.com/300?text=Producto+6",
  "https://via.placeholder.com/300?text=Producto+7",
  "https://via.placeholder.com/300?text=Producto+8",
  "https://via.placeholder.com/300?text=Producto+9",
  "https://via.placeholder.com/300?text=Producto+10",
];

export const Productos = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">NUESTROS PRODUCTOS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
          {productos.map((producto, index) => (
            <div key={index} className="bg-white p-4 rounded-sm shadow-md transform transition duration-300 hover:scale-105">
              <img
                src={producto}
                alt={`Producto ${index + 1}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-center">Producto {index + 1}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
