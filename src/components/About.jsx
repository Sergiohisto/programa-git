import React from "react";


export const About = () => {
  return (
    <section className="bg-green-900 ">
      <div className="container mx-auto px-4">
        <div className="sm:border-l sm:border-r border-white border-opacity-20 border-dashed">
          <div className="py-32 px-4 sm:px-24">
            <p className="uppercase text-green-400 text-xs mb-4 tracking-widest">
              GYM ORION
            </p>
            <h1 className="font-heading text-white text-4xl md:text-5xl font-bold mb-20">
              Tu mejor plataforma para gestionar la información de tus clientes.{" "}
            </h1>
            <div className="flex flex-wrap items-center -m-4">
              <div className="w-full lg:w-1/3 p-4">
                <div className="mb-10" bis_skin_checked="1">
                  <div
                    className="flex flex-wrap gap-2 mb-2"
                    bis_skin_checked="1"
                  >
                    <div
                      className="bg-gradient-to-b from-green-400 via-green-500 to-darkGreen-900 rounded-full p-px w-6 h-6"
                      bis_skin_checked="1"
                    >
                      <div
                        className="bg-greenSecondary-900 rounded-full p-1"
                        bis_skin_checked="1"
                      >
                        <p className="text-white text-center text-xs font-semibold">
                          1
                        </p>
                      </div>
                    </div>
                    <p className="text-white text-lg font-semibold">
                      Información y datos.
                    </p>
                  </div>
                  <p className="text-white text-opacity-70 max-w-xs">
                    Registro de los datos personales y de contacto de tus clientes.
                  </p>
                </div>
                <div className="mb-10" bis_skin_checked="1">
                  <div
                    className="flex flex-wrap gap-2 mb-2"
                    bis_skin_checked="1"
                  >
                    <div
                      className="bg-gradient-to-b from-green-400 via-green-500 to-darkGreen-900 rounded-full p-px w-6 h-6"
                      bis_skin_checked="1"
                    >
                      <div
                        className="bg-greenSecondary-900 rounded-full p-1"
                        bis_skin_checked="1"
                      >
                        <p className="text-white text-center text-xs font-semibold">
                          2
                        </p>
                      </div>
                    </div>
                    <p className="text-white text-lg font-semibold">
                      Datos de suscripción.
                    </p>
                  </div>
                  <p className="text-white text-opacity-70 max-w-xs">
                    Información del registro de inicio y terminación de las menbresias de tus clientes.
                  </p>
                </div>
                <div className="mb-10" bis_skin_checked="1">
                  <div
                    className="flex flex-wrap gap-2 mb-2"
                    bis_skin_checked="1"
                  >
                    <div
                      className="bg-gradient-to-b from-green-400 via-green-500 to-darkGreen-900 rounded-full p-px w-6 h-6"
                      bis_skin_checked="1"
                    >
                      <div
                        className="bg-greenSecondary-900 rounded-full p-1"
                        bis_skin_checked="1"
                      >
                        <p className="text-white text-center text-xs font-semibold">
                          3
                        </p>
                      </div>
                    </div>
                    <p className="text-white text-lg font-semibold">
                      Control de paquetes de membresias.
                    </p>
                  </div>
                  <p className="text-white text-opacity-70 max-w-xs">
                    Control de la membresias: Mensual, Trimestral o Anual.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-2/3 p-4">
                <img src="/logo.webp" alt="logo" width="500px" height="500px" className="rounded-3xl w-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
