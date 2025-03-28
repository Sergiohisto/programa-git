import axios from "axios";

async function loadClientes() {
  const { data } = await axios.get("http://localhost:3000/api/customers");
  return data;
}

async function clientesPage() {
  const clientes = await loadClientes();
  return (
    <div className="grid grid-cols-4 gap-4">
      {clientes.map((clientes) => (
        <div className="bg-white rounded text-blue-600 px-3 py-3" key={clientes.id}>
          <h1>{clientes.nombre}</h1>
          <h2>{clientes.apellido}</h2>
          <h3>{clientes.fecha_registro}</h3>
          <p>{clientes.membresia_tipo}</p>
        </div>
      ))}
    </div>
  );
}

export default clientesPage;
