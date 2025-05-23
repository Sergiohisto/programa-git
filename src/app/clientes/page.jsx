import ClienteCard from "@/components/ClienteCard";
import Header from "@/components/Header";
import axios from "axios";

async function loadClientes() {
  const { data } = await axios.get("http://localhost:3000/api/customers");
  return data;
}

async function clientesPage() {
  const clientes = await loadClientes();
  return (
    <section>
      <Header/>
      <div className="py-28 px-6 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {clientes.map((clientes) => (
            <ClienteCard clientes={clientes} key={clientes.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default clientesPage;
