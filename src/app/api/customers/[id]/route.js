import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const result = await conn.query("SELECT * FROM clientes WHERE id = ?", [
      params.id,
    ]);
    if (result.length === 0) {
      return NextResponse.json(
        {
          message: "cliente no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
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
export async function DELETE(request, { params }) {
  const result = await conn.query("DELETE FROM clientes WHERE id = ?", [
    params.id,
  ]);
  return new Response(null, {
    status: 204,
  });
}
export function PUT() {
  return NextResponse.json("Actualizando clientes");
}
