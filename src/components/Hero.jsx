import React from "react";

const Hero = () => {
  return (
    <section className=" min-h-screen bg-emerald-300 py-8">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 max-w-2xl mx-auto pt-20">
        <div className="col-span-2 aspect-video bg-red-400 rounded-2xl px-4 py-6 text-center">
          TEXTO 1
        </div>
        <div className="row-start-2 h-16 bg-orange-300 rounded-2xl px-4 py-6 text-center">
          CREAR CLIENTE
        </div>
        <div className="row-start-2 h-16 bg-blue-400 rounded-2xl px-4 py-6 text-center">
          LISTA DE CLIENTE 
        </div>
      </div>
    </section>
  );
};

export default Hero;
