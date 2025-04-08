"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

function Button({ clienteId }) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-x-2 mt-3">
      <button
        className="bg-red-400 rounded px-2 py-2"
        onClick={async () => {
          if (confirm("estas seguro de eliminar el cliente")) {
            const res = await axios.delete(
              "http://localhost:3000/api/customers/" + clienteId
            );
            if (res.status === 204) {
              router.push("/clientes");
            }
          }
        }}
      >
        Eliminar
      </button>
      <button className="bg-gray-400 rounded px-2 py-2">Editar</button>
    </div>
  );
}

export default Button;
