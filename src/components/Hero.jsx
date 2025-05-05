import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" min-h-screen py-8">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 max-w-2xl mx-auto pt-20">
        <div className="col-span-2 aspect-video rounded-2xl text-center">
          <img src="/logo.webp" alt="logo" className=" object-cover w-full rounded-2xl">
          </img>
        </div>
        <div className="row-start-2 h-16 bg-green-600 hover:bg-green-400 rounded-2xl px-4 py-6 text-center">
          <Link className="px-20 py-6" href="/new">
            CREAR CLIENTE
          </Link>
        </div>
        <div className="row-start-2 h-16 bg-blue-400 hover:bg-blue-300 rounded-2xl px-4 py-6 text-center">
          <Link className="px-10 py-6" href="/clientes">
            LISTA DE CLIENTE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
