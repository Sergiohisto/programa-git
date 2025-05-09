import React from "react";
import Card from "./Card";

export const About = () => {
  return (
    <section className="px-5 flex justify-center overflow-hidden lg:block py-5">
      <div className="w-full max-w-[1280px] mx-auto">
        <div class="flex flex-col items-center gap-10 mb-20 sm:flex-row">
          <h2 class="greenhead text-center sm:text-left text-3xl sm:text-4xl">
            TITULOS
          </h2>
          <p class="w-auto text-center sm:text-left sm:w-[580px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            cum assumenda necessitatibus recusandae odit quaerat pariatur
            laborum.
          </p>
        </div>
        <div>
            <Card />
        </div>
      </div>
    </section>
  );
};
