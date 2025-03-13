import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("lista de clientes");
}
export async function POST(request) {
  try {
    const {
      nombre,
      apellido,
      email,
      telefono,
      fecha_registro,
      estado,
      membresia_tipo,
      fecha_inicio_membresia,
      fecha_fin_membresia,
    } = await request.json();

    const result = await conn.query("INSERT INTO clientes SET ?", {
      nombre,
      apellido,
      email,
      telefono,
      fecha_registro,
      estado,
      membresia_tipo,
      fecha_inicio_membresia,
      fecha_fin_membresia,
    });

    console.log(result);

    return NextResponse.json("Creando clientes");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
