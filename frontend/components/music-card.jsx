import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MusicCard({ title, artist, imageUrl }) {
  return (
    <Card className="w-full max-w-[200px]">
      <CardContent className="p-0">
        <AspectRatio ratio={1}>
          <Image
            src="https://lastfm.freetls.fastly.net/i/u/500x500/07f492a00c904cc6ccf868010be4d5a6.jpg"
            alt={title}
            className="rounded-t-md object-cover"
            fill
          />
        </AspectRatio>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-1 p-2">
        <div className="text-sm font-semibold truncate">Master of puppets</div>
        <div className="text-xs text-muted-foreground truncate">Metallica</div>
        <Button size="sm" className="mt-2">Tocar</Button>
      </CardFooter>
    </Card>
  )
}
