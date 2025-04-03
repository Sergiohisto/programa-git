import axios from "axios";

async function loadCliente(clienteId) {
  const { data } = await axios.get(
    "http://localhost:3000/api/customers/" + clienteId
  );
  return data;
}

async function Page({ params }) {
  const cliente = await loadCliente(params.id);
  console.log(cliente);
  return (
    <div className="text-white text-5xl">
      <p>nombre: {cliente.nombre}</p>
      <p>apellido: {cliente.apellido}</p>

      <button>delete</button>
    </div>
  );
}

export default Page;
