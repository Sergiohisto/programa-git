import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";

export async function GET(request, props) {
  const params = await props.params;
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
export async function DELETE(request, props) {
  try {
    const params = await props.params;
    const result = await conn.query("DELETE FROM clientes WHERE id = ?", [
      params.id,
    ]);
    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "cliente no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    return new Response(null, {
      status: 204,
    });
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
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const result = await conn.query("UPDATE clientes SET ? WHERE id = ?", [
      data,
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "cliente no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    const updatedClientes = await conn.query(
      "SELECT * FROM clientes WHERE id = ?",
      [params.id]
    );
    return NextResponse.json(updatedClientes[0]);
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
