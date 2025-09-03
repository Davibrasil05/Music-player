"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // <- importa o hook
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardAction, CardFooter } from "@/components/ui/card";

export default function Home() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter(); // <- inicializa o hook

  // Função para navegar para a tela de cadastro
  const goToRegister = () => {
    router.push("/register"); // <- rota da página de cadastro
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card >
        <CardHeader>
          <CardTitle>Faça o seu Login</CardTitle>
          <CardAction onClick={goToRegister} className="cursor-pointer">
            Cadastre-se
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>Insira seu email: </p>
          <Input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>Insira sua senha: </p>
          <Input 
            type="password" 
            placeholder="Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <a className="cursor-pointer">Esqueceu a senha?</a>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button>Continue com o Google</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
