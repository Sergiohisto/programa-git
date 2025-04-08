import axios from "axios";
import Button from "./Button";

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
    <section className="flex items-center justify-center pt-4">
      <div className="p-6 bg-white text-black">
        <p>nombre: {cliente.nombre}</p>
        <p>apellido: {cliente.apellido}</p>
        <Button clienteId={cliente.id}/>
      </div>
    </section>
  );
}

export default Page;
