"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

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
  const form = useRef(null);
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
            nombre: res.data.nombre,
            apellido: res.data.apellido,
            email: res.data.email,
            telefono: res.data.telefono,
            fecha_registro: res.data.fecha_registro,
            membresia_tipo: res.data.membresia_tipo,
            fecha_inicio_membresia: res.data.fecha_inicio_membresia,
            fecha_fin_membresia: res.data.fecha_fin_membresia,
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
      form.current.reset();
      router.push("/clientes");
    } catch (error) {
      console.error("Error al guardar el cliente:", error);
    }
  };
  return (
    <form
      onSubmit={handleSumit}
      className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4"
      ref={form}
    >
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="nombre"
      >
        Nombre del cliente
      </label>
      <input
        name="nombre"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="nombre"
        value={cliente.nombre}
        onChange={handleChange}
        autoFocus
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
        value={cliente.apellido}
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
        value={cliente.email}
        onChange={handleChange}
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="telefono"
      >
        Telefono del cliente
      </label>
      <input
        name="telefono"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="telefono"
        value={cliente.telefono}
        onChange={handleChange}
      ></input>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="telefono"
      >
        tipo de membresia del cliente
      </label>
      <input
        name="membresia_tipo"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="membresia_tipo"
        value={cliente.membresia_tipo}
        onChange={handleChange}
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fecha_registro"
      >
        fecha registro del cliente
      </label>
      <input
        name="fecha_registro"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="fecha registro"
        value={cliente.fecha_registro}
        onChange={handleChange}
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fecha_inicio_membresia"
      >
        fecha inicio del cliente
      </label>
      <input
        name="fecha_inicio_membresia"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="fecha_inicio_membresia"
        value={cliente.fecha_inicio_membresia}
        onChange={handleChange}
      ></input>

      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="fecha_fin_membresia"
      >
        fecha fin del cliente
      </label>
      <input
        name="fecha_fin_membresia"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
        type="text"
        placeholder="fecha_fin_membresia"
        value={cliente.fecha_fin_membresia}
        onChange={handleChange}
      ></input>

      <button className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded mt-4">
        {params.id ? "Actualizar Cliente" : "Crear Cliente"}
      </button>
    </form>
  );
};
