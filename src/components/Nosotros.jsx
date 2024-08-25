import nosotros from "../assets/images/nosotros.png";

export const Nosotros = () => {
  return (
    <section className="py-16 px-4 bg-black text-center ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white w-fit text-center m-auto border-t-4 border-b-4 border-red-700 py-2">
          SOBRE NOSOTROS
        </h2>

        <p className="text-lg mb-8 text-white">
          Nos dedicamos a ser líderes en soluciones de seguridad contra
          incendios, ofreciendo extintores y servicios de instalación,
          mantenimiento y recarga en cada punto del pais con la máxima calidad y
          adaptados a las necesidades específicas de nuestros clientes.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Puedes añadir imágenes o contenido adicional aquí */}
          <div className="flex-1">
            <img
              src={nosotros}
              alt="Nosotros"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-white text-start text-xl">
              Con una firme dedicación a la calidad y la innovación, nuestra
              empresa está comprometida en ofrecer soluciones efectivas en
              extintores y servicios de seguridad contra incendios, adaptándonos
              a las necesidades de nuestros clientes y construyendo una sólida
              reputación en la industria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
