import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12
    md:pb-24"
    >
      <div className="py-6 md:order-1 md:block">
        <img src="/logo.webp" alt="logo" width="500px" height="500px" />
      </div>
      <div className=" mx-8">
        <h1 class="text-4xl text-center lg:text-4xl xl:text-6xl font-bold lg:tracking-tight xl:tracking-tighter text-green-700">
          Creación de datos y seguimientos de clientes
        </h1>
        <p className="text-lg mt-4 text-center text-slate-600">
          Plataforma para el seguimiento y gestión de tus clientes.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/new"
            className="px-4 py-2 xl:px-5 xl:py-3 border-2 border-black text-center bg-green-300 hover:bg-primary"
          >
            Crear Cliente
          </Link>
          <Link
            href="/clientes"
            className="px-4 py-2 xl:px-5 xl:py-3 border-2 border-black text-center hover:bg-green-300"
          >
            Lista de Cliente
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
