
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardAction, CardFooter } from "@/components/ui/card";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Faça o seu Login</CardTitle>
          <CardAction>Cadastre-se</CardAction>
        </CardHeader>
        <CardContent>
          <p>Insira seu email: </p>
          <Input type ="email" placeholder ="Email"/>

          <p >Insira sua senha: </p>
          <Input type = "password" placeholder = "Senha"/>
          <a class="cursor-pointer">Esqueceu a senha?</a>

        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button> 
              Continue com o Google
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
