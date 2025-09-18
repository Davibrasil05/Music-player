import { Play, SkipBack,SkipForward} from "lucide-react"
import { Button } from "./ui/button";

export function FooterPlayer() {
  return (
     <footer className="fixed bottom-0 left-0 right-0 z-80 border-t bg-black p-4">
      <div className="flex justify-center">
        <Button variant="secondary" size="icon" className="size-8">
          <SkipBack />
        </Button>
        <Button variant="secondary" size="icon" className="size-8">
          <Play />
        </Button>
        <Button variant="secondary" size="icon" className="size-8">
          <SkipForward />
        </Button>
      </div>
    </footer>
  );
}

