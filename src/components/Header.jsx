import soldimatrojo from "../assets/images/soldimatrojo-Photoroom.png";

export const Header = () => {
  return (
    <header className="bg-white px-4 py-2  w-full top-0 z-10 border-b-2 border-b-gray-200">
      <div className="w-full flex justify-between items-center">
        <div className="text-white font-bold text-lg ml-10">
          <img src={soldimatrojo} alt="Logo" className="h-24" />
        </div>
        <nav>
          <ul className="flex space-x-1 mr-16 h-24 items-center">
            <li className="h-full flex items-center">
              <a
                href="#hero"
                className="font-semibold relative overflow-hidden h-full flex items-center justify-center p-3 transition duration-300 ease-in-out hover:text-white group"
              >
                <span className="relative z-10">INICIO</span>
                <span className="absolute inset-0 bg-red-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              </a>
            </li>
            <li className="h-full flex items-center">
              <a
                href="#nosotros"
                className="font-semibold relative overflow-hidden h-full flex items-center justify-center p-3 transition duration-300 ease-in-out hover:text-white group"
              >
                <span className="relative z-10">NOSOTROS</span>
                <span className="absolute inset-0 bg-red-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              </a>
            </li>
            <li className="h-full flex items-center">
              <a
                href="#galeria"
                className="font-semibold relative overflow-hidden h-full flex items-center justify-center p-3 transition duration-300 ease-in-out hover:text-white group"
              >
                <span className="relative z-10">GALERÍA</span>
                <span className="absolute inset-0 bg-red-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              </a>
            </li>
            <li className="h-full flex items-center">
              <a
                href="#productos"
                className="font-semibold relative overflow-hidden h-full flex items-center justify-center p-3 transition duration-300 ease-in-out hover:text-white group"
              >
                <span className="relative z-10">PRODUCTOS</span>
                <span className="absolute inset-0 bg-red-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              </a>
            </li>
            <li className="h-full flex items-center">
              <a
                href="#contacto"
                className="font-semibold relative overflow-hidden h-full flex items-center justify-center p-3 transition duration-300 ease-in-out hover:text-white group"
              >
                <span className="relative z-10">CONTACTO</span>
                <span className="absolute inset-0 bg-red-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
