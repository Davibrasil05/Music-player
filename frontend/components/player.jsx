"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import Image from "next/image"

export default function Player() {
  const [musicas, setMusicas] = useState([])
  const [currentAudio, setCurrentAudio] = useState(null)
  const [currentPlaying, setCurrentPlaying] = useState(null)

  // Puxa músicas do backend
  useEffect(() => {
    fetch("http://localhost:4000/musicas")
      .then((res) => res.json())
      .then(setMusicas)
      .catch(console.error)
  }, [])

  // Função de Play/Pause
  const togglePlay = (musica) => {
    if (currentPlaying === musica.id) {
      currentAudio.pause()
      setCurrentPlaying(null)
      return
    }

    if (currentAudio) currentAudio.pause()

    const audio = new Audio(musica.file_path)
    audio.play().catch(err => console.error("Erro ao tocar música:", err))

    setCurrentAudio(audio)
    setCurrentPlaying(musica.id)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {musicas.map((musica) => (
        <Card key={musica.id} className="cursor-pointer hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-0">
            <div className="relative">
              <Image
                src={musica.cover_url || "https://placehold.co/256x256?text=No+Cover"}
                alt={`Capa do álbum ${musica.album}`}
                width={256}
                height={256}
                className="object-cover w-full h-64"
                unoptimized
              />
              <Button
                size="icon"
                className="absolute bottom-3 right-3 rounded-full bg-black hover:bg-neutral-800"
                onClick={() => togglePlay(musica)}
              >
                {currentPlaying === musica.id ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-4">
            <p className="font-semibold text-sm truncate">{musica.title}</p>
            <p className="text-xs text-muted-foreground">{musica.artist}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
