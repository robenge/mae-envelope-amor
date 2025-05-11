import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.error("Erro ao reproduzir áudio:", e);
          toast({
            title: "Erro na música",
            description: "Não foi possível reproduzir a música. Verifique o arquivo.",
            variant: "destructive",
          });
        });
    }
  };

  useEffect(() => {
    const handlePlayEvent = () => {
      togglePlay();
    };

    window.addEventListener("playMusic", handlePlayEvent);
    return () => window.removeEventListener("playMusic", handlePlayEvent);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      <audio ref={audioRef} src="/musica.mp3" preload="auto" />

      <Button
        onClick={togglePlay}
        variant="outline"
        size="icon"
        className={\`rounded-full w-14 h-14 shadow-lg transition-colors duration-300 \${isPlaying ? "bg-envelope text-white" : "bg-white text-envelope"}\`}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </Button>

      <div className="flex items-center text-xs text-gray-500">
        <Volume2 size={14} className="mr-1" />
        {isPlaying ? "Pausar" : "Tocar"} Música
      </div>
    </div>
  );
};

export default MusicPlayer;