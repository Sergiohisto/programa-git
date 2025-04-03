import ClienteCard from "@/components/ClienteCard";
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
       <ClienteCard clientes={clientes} key={clientes.id}/>
      ))}
    </div>
  );
}

export default clientesPage;
