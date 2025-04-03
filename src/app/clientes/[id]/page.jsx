import axios from "axios";

async function loadCliente(clienteId) {
  const { data } = await axios.get(
    "http://localhost:3000/api/customers/" + clienteId
  );
  return data;
}

async function Page(props) {
  const params = await props.params;
  const cliente = await loadCliente(params.id);
  console.log(cliente);
  return (
    <section className="flex items-center justify-center">
      <div className="p-6 bg-white text-black">
        <p>nombre: {cliente.nombre}</p>
        <p>apellido: {cliente.apellido}</p>

        <button className="bg-red-400 rounded px-2 py-2">delete</button>
      </div>
    </section>
  );
}

export default Page;
