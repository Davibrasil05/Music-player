import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export async function POST(req) {
  try {
    const { name, email, senha } = await req.json();

    if (!name || !email || !senha) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Verifica se usuário já existe
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email", email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { error: "Email já está em uso" },
        { status: 400 }
      );
    }

    const password_hash = await bcrypt.hash(senha, 10);

    const { error: insertError } = await supabase
      .from("users")
      .insert([{ name, email, password_hash }]);

    if (insertError) {
      console.error(insertError);
      return NextResponse.json(
        { error: "Erro ao criar usuário" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Usuário criado com sucesso!" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
