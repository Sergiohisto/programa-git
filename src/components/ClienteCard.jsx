import Link from "next/link";

const ClienteCard = ({ clientes }) => {
  return (
    <Link
      href={`/clientes/${clientes.id}`}
      className="bg-white rounded text-blue-600 px-3 py-3 hover:bg-slate-300 cursor-pointer"
    >
      <h1>{clientes.nombre}</h1>
      <h2>{clientes.apellido}</h2>
      <h3>{clientes.fecha_registro}</h3>
      <p>{clientes.membresia_tipo}</p>
    </Link>
  );
};

export default ClienteCard;
