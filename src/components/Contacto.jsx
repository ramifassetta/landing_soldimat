import soldimatrojo from "../assets/images/soldimatrojo-logo.png";

export const Contacto = () => {
  return (
    <section
      className="bg-black w-full flex flex-col lg:flex-row items-center lg:justify-between p-4 lg:p-10"
      id="contacto"
    >
      <div className="flex flex-col lg:flex-col xl:flex-row 2xl:flex-row items-center lg:items-center mb-6 lg:mb-0">
        <img
          src={soldimatrojo}
          alt="Soldimat Logo"
          className="my-2 lg:my-auto w-32 h-auto"
        />
        <p className="flex flex-col lg:flex-col text-white font-bold text-lg lg:text-4xl  text-center lg:text-left">
          SOLDIMAT <span className="text-white font-normal text-xl"> MATAFUEGOS</span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-6 items-start lg:items-start mb-6 lg:mb-0">
        <div className="flex flex-col items-center gap-y-3 w-full lg:w-1/2">
          <h3 className="text-white font-bold text-lg lg:text-xl">SEGUINOS</h3>
          <a
            href="https://www.instagram.com/soldimatmatafuegos/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white text-sm lg:text-base"
          >
            <div className="bg-gray-900 hover:bg-gray-800 p-1 rounded-md mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-instagram text-white"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </div>
            soldimatmatafuegos
          </a>
        </div>
        <div className="flex flex-col gap-y-3 mr-3 w-full lg:w-1/2 tems-center">
          <h3 className="text-white font-bold mt-3 lg:mt-0 text-lg lg:text-xl">
            HORARIO DE ATENCIÓN
          </h3>
          <div className="flex i text-sm lg:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
              className="bi bi-clock text-white mr-2 "
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg>
            <p className="text-white">
              De lunes a viernes: de 8:00 a 12:00 y de 16:00 a 20:00.
            </p>
          </div>
        </div>
      </div>

      <div className="relative p-6 rounded-md shadow-md bg-red-600">
        <div className="absolute inset-0 bg-red-600 opacity-50"></div>
        <div className="relative z-10 text-start">
          <h3 className="font-bold text-white mb-4 text-lg lg:text-xl">
            CONTACTO
          </h3>
          <p className="text-white mb-2 flex items-center text-sm lg:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            Av. Siempreviva 742, Springfield
          </p>
          <p className="text-white flex items-center text-sm lg:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone-fill mr-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
            +54 123 456 7890
          </p>
          <p className="text-white flex items-center text-sm lg:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-fill mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            contacto@soldimat.com
          </p>
        </div>
      </div>
    </section>
  );
};
