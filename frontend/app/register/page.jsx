"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

export default function RegisterPage() {
  const[name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Função para enviar cadastro
  const handleRegister = async () => {
    if (senha !== confirmSenha) {
      setError("As senhas não coincidem!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, email, senha }),
      });

      if (res.ok) {
        router.push("/"); // redireciona para login depois de cadastrar
      } else {
        const data = await res.json();
        setError(data.error || "Erro ao cadastrar.");
      }
    } catch (err) {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <Card>
        <CardHeader>
          <CardTitle>Crie a sua conta</CardTitle>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500">{error}</p>}

        <p>Insira seu nome:</p>
          <Input
            type="text"
            placeholder="Nome"
            value ={name}
            onChange={(e) => setName(e.target.value)}
            />
          <p>Insira seu email: </p>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>Crie sua senha: </p>
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <p>Confirme sua senha: </p>
          <Input
            type="password"
            placeholder="Confirme a senha"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
          />
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button onClick={handleRegister} disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
