import axios from "axios";
import Button from "./Button";
import Header from "@/components/Header";

async function loadCliente(clienteId) {
  const { data } = await axios.get(
    "http://localhost:3000/api/customers/" + clienteId
  );
  return data;
}
const opcionesFecha = (Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
});

async function Page(props) {
  const params = await props.params;
  const clientes = await loadCliente(params.id);
  console.log(clientes);

  return (
    <>
      <Header />
      <section className="flex items-center justify-center pt-10">
        <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {clientes.nombre} {clientes.apellido}
            </h2>
            <span
              className={`text-sm font-medium px-2 py-1 rounded ${
                clientes.estado === "activo"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {clientes.estado}
            </span>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p>
              📧 <span className="font-medium">Email:</span> {clientes.email}
            </p>
            {clientes.telefono && (
              <p>
                📞 <span className="font-medium">Teléfono:</span>{" "}
                {clientes.telefono}
              </p>
            )}
            <p>
              🗓️ <span className="font-medium">Registrado el:</span>{" "}
              {new Date(clientes.fecha_registro).toLocaleDateString(
                "es-ES",
                opcionesFecha
              )}
            </p>
            <p>
              💳 <span className="font-medium">Membresía:</span>{" "}
              {clientes.membresia_tipo}
            </p>
            <p>
              ⏱️ <span className="font-medium">Inicio:</span>{" "}
              {new Date(clientes.fecha_inicio_membresia).toLocaleDateString(
                "es-ES",
                opcionesFecha
              )}
            </p>
            <p>
              🛑 <span className="font-medium">Fin:</span>{" "}
              {new Date(clientes.fecha_fin_membresia).toLocaleDateString(
                "es-ES",
                opcionesFecha
              )}
            </p>
          </div>
          <Button clienteId={clientes.id} />
        </div>
      </section>
    </>
  );
}

export default Page;
