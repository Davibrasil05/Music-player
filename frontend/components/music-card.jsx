"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export function MusicCard() {
  return (
    <Card className = "cursor-pointer">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src="https://lastfm.freetls.fastly.net/i/u/500x500/07f492a00c904cc6ccf868010be4d5a6.jpg" 
            alt="Capa do Álbum"
            width={256}
            height={256}
            className="object-cover w-full h-64"
          />
          <Button 
            size="icon" 
            className="absolute bottom-3 right-3 rounded-full bg-black-500 hover:bg-white-600"
          >
            <Play className="w-5 h-5 text-white" />
          </Button>
          
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <p className="font-semibold text-sm">Master of Puppets</p>
        <p className="text-xs text-muted-foreground">Metallica</p>
      </CardFooter>
    </Card>
  )
}
