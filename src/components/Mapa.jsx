
export const Mapa = () => {
    return (
      <section className="bg-black py-3 border-b border-white">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-2xl font-bold mb-4 text-white">ENCONTRANOS</h2>
          <p className="mb-6 text-white">Visitanos en nuestra ubicación para conocer más sobre nosotros.</p>
          <div className="w-full max-w-full mx-auto h-0 pb-[30%] relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.134223058976!2d-63.267312623587685!3d-32.41556254526468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc4317ce7fefb3%3A0xa43d1ddd10cfd828!2sLiniers%20402%2C%20X5901%20Villa%20Mar%C3%ADa%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1725330717258!5m2!1ses-419!2sar"
              className="absolute top-0 left-0 w-full h-full border-0 rounded-lg shadow-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
