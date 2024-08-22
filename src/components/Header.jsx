import soldimatrojo from "../assets/images/soldimatrojo-Photoroom.png";

export const Header = () => {
  return (
    <header className="bg-white p-4 fixed w-full top-0 z-10 border-b-2 border-b-gray-200">
      <div className="w-full flex justify-between items-center">
        <div className="text-white font-bold text-lg ml-10">
          <img src={soldimatrojo} alt="Logo" className="h-24" />
        </div>
        <nav>
          <ul className="flex space-x-6  mr-16">
          <li><a href="#hero" className="font-semibold hover:bg-gray-300 p-3 rounded-md transition duration-300 ease-in-out">Inicio</a></li>
          <li><a href="#nosotros" className="font-semibold hover:bg-gray-300 p-3 rounded-md transition duration-300 ease-in-out">Nosotros</a></li>
          <li><a href="#galeria" className="font-semibold hover:bg-gray-300 p-3 rounded-md transition duration-300 ease-in-out">Galería</a></li>
          <li><a href="#productos" className="font-semibold hover:bg-gray-300 p-3 rounded-md transition duration-300 ease-in-out">Productos</a></li>
          <li><a href="#contacto" className="font-semibold hover:bg-gray-300 p-3 rounded-md transition duration-300 ease-in-out">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
