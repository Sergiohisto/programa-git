"use client";
import { useState } from "react";

export const ClienteForm = () => {
  const [cleinte, setCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha_registro: "DATE",
    membresia_tipo: "",
    fecha_inicio_membresia: "",
    fecha_fin_membresia: "",
  });

  const handleChange = (e) => {
    setCliente({
      ...cleinte,
      [e.target.name]: e.target.value,
    });
  };
  const handleSumit = (e) => {
    e.preventDefault();
    console.log(cleinte);
  };
  return (
    <form
      onSubmit={handleSumit}
      className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
    >
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="nombre"
      >
        Nombre del ciente
      </label>
      <input
        name="nombre"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="nombre"
        onChange={handleChange}
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="apellido"
      >
        Apellido del ciente
      </label>
      <input
        name="apellido"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="apellido"
        onChange={handleChange}
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Correo del ciente
      </label>
      <input
        name="email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="email"
        onChange={handleChange}
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="telefono"
      >
        Telefono del ciente
      </label>
      <input
        name="telefono"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="telefono"
        onChange={handleChange}
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fecha_registro"
      >
        fecha registro del ciente
      </label>
      <input
        name="fecha_registro"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="fecha registro"
        onChange={handleChange}
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fecha_inicio_membresia"
      >
        fecha inicio del ciente
      </label>
      <input
        name="fecha_inicio_membresia"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="fecha_inicio_membresia"
        onChange={handleChange}
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fecha_fin_membresia"
      >
        fecha fin del ciente
      </label>
      <input
        name="fecha_fin_membresia"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="fecha_fin_membresia"
        onChange={handleChange}
      ></input>

      <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">
        Crear Cliente
      </button>
    </form>
  );
};
