import nosotros from "../assets/images/nosotros.png"

export const Nosotros = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 text-center w-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="text-lg mb-8">
          Aquí puedes añadir una breve descripción sobre tu empresa o equipo. Habla sobre tu misión, visión y valores, y ofrece a los visitantes una visión clara de quiénes sois.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Puedes añadir imágenes o contenido adicional aquí */}
          <div className="flex-1">
            <img src={nosotros} alt="Nosotros" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="flex-1">
            <p>
              Más detalles o información relevante sobre tu empresa. Este espacio puede utilizarse para presentar logros, historia, o cualquier otro dato de interés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
