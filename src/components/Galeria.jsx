import { galery } from "../constants";

export const Galeria = () => {
  return (
    <section className="py-6 px-4 bg-black" id="galeria">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galery.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden group flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Galería imagen ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black opacity-50 transform scale-x-0 scale-y-0 group-hover:scale-x-100 group-hover:scale-y-100 transition-transform duration-500 ease-in-out origin-top-left rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
