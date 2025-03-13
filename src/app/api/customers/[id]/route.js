import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("obteniendo clientes");
}
export function DELETE() {
    return NextResponse.json("Eliminando clientes");
  }
  export function PUT() {
    return NextResponse.json("Actualizando clientes");
  }
