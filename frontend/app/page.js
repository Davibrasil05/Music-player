
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Teste Shadcn/UI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="input">Digite algo:</Label>
            <Input
              id="input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Ex: Testando..."
            />
          </div>
          <Button onClick={() => alert(`Você digitou: ${text}`)}>
            Mostrar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
