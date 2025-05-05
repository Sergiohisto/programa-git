"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import Header from "./Header";

export const ClienteForm = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha_registro: "",
    membresia_tipo: "",
    fecha_inicio_membresia: "",
    fecha_fin_membresia: "",
  });

  const router = useRouter();
  const params = useParams();

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (params.id) {
      axios
        .get(`http://localhost:3000/api/customers/${params.id}`)
        .then((res) => {
          setCliente({
            nombre: res.data.nombre || "",
            apellido: res.data.apellido || "",
            email: res.data.email || "",
            telefono: res.data.telefono || "",
            fecha_registro: res.data.fecha_registro?.slice(0, 10) || "",
            membresia_tipo: res.data.membresia_tipo || "",
            fecha_inicio_membresia:
              res.data.fecha_inicio_membresia?.slice(0, 10) || "",
            fecha_fin_membresia:
              res.data.fecha_fin_membresia?.slice(0, 10) || "",
          });
        })
        .catch((err) =>
          console.error("Error al obtener datos del cliente:", err)
        );
    }
  }, [params.id]);

  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      if (params.id) {
        await axios.put(
          `http://localhost:3000/api/customers/${params.id}`,
          cliente
        );
      } else {
        await axios.post("http://localhost:3000/api/customers", cliente);
      }
      router.push("/clientes");
    } catch (error) {
      console.error("Error al guardar el cliente:", error);
    }
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
        Nombre del cliente
      </label>
      <input
        name="nombre"
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        placeholder="Nombre"
        value={cliente.nombre}
        onChange={handleChange}
        autoFocus
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="apellido"
      >
        Apellido del cliente
      </label>
      <input
        name="apellido"
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        placeholder="Apellido"
        value={cliente.apellido}
        onChange={handleChange}
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Correo del cliente
      </label>
      <input
        name="email"
        type="email"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        placeholder="Correo electrónico"
        value={cliente.email}
        onChange={handleChange}
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="telefono"
      >
        Teléfono del cliente
      </label>
      <input
        name="telefono"
        type="tel"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        placeholder="Teléfono"
        value={cliente.telefono}
        onChange={handleChange}
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="membresia_tipo"
      >
        Tipo de membresía del cliente
      </label>
      <input
        name="membresia_tipo"
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        placeholder="Tipo de membresía"
        value={cliente.membresia_tipo}
        onChange={handleChange}
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fecha_registro"
      >
        Fecha de registro
      </label>
      <input
        name="fecha_registro"
        type="date"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        value={cliente.fecha_registro}
        onChange={handleChange}
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fecha_inicio_membresia"
      >
        Fecha de inicio de membresía
      </label>
      <input
        name="fecha_inicio_membresia"
        type="date"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        value={cliente.fecha_inicio_membresia}
        onChange={handleChange}
      />

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fecha_fin_membresia"
      >
        Fecha de fin de membresía
      </label>
      <input
        name="fecha_fin_membresia"
        type="date"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        value={cliente.fecha_fin_membresia}
        onChange={handleChange}
      />

      <button className="bg-green-600 hover:bg-green-400 text-white text-center font-bold py-2 px-4 rounded mt-4">
        {params.id ? "Actualizar Cliente" : "Crear Cliente"}
      </button>
    </form>
  );
};
