import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("lista de clientes");
}
export function POST() {
  return NextResponse.json("Creando clientes");
}
