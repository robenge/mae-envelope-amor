
import { useEffect, useState } from 'react';
import { Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeSrc = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1693705880&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false";

  useEffect(() => {
    // Initialize SoundCloud Widget API
    let widget: any;

    // Function to setup the SoundCloud Widget
    const setupWidget = () => {
      if (window.SC && window.SC.Widget && iframeLoaded) {
        const iframeElement = document.getElementById('soundcloud-player');
        if (iframeElement) {
          widget = window.SC.Widget(iframeElement);
          
          widget.bind(window.SC.Events.READY, () => {
            console.log('SoundCloud widget is ready');
          });

          widget.bind(window.SC.Events.ERROR, () => {
            console.error("Error with SoundCloud player");
            toast({
              title: "Erro na música",
              description: "Não foi possível carregar a música. Tente novamente mais tarde.",
              variant: "destructive",
            });
          });
        }
      }
    };

    // Load the SoundCloud Widget API
    const loadSoundCloudAPI = () => {
      if (!window.SC) {
        const script = document.createElement('script');
        script.src = 'https://w.soundcloud.com/player/api.js';
        script.onload = setupWidget;
        document.body.appendChild(script);
      } else {
        setupWidget();
      }
    };

    if (iframeLoaded) {
      loadSoundCloudAPI();
    }

    return () => {
      if (widget) {
        widget.unbind(window.SC.Events.READY);
        widget.unbind(window.SC.Events.ERROR);
      }
    };
  }, [iframeLoaded]);

  const togglePlay = () => {
    if (window.SC && window.SC.Widget) {
      const widget = window.SC.Widget(document.getElementById('soundcloud-player'));
      
      if (isPlaying) {
        widget.pause();
      } else {
        widget.play().catch((e: any) => {
          console.error("Erro ao reproduzir áudio:", e);
          toast({
            title: "Erro na música",
            description: "Não foi possível reproduzir a música. Tente novamente mais tarde.",
            variant: "destructive",
          });
        });
      }
      
      setIsPlaying(!isPlaying);
    } else {
      toast({
        title: "Carregando player",
        description: "Aguarde um momento enquanto o player de música é carregado.",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <iframe 
        id="soundcloud-player" 
        src={iframeSrc}
        onLoad={() => setIframeLoaded(true)}
        style={{ display: 'none' }}
        allow="autoplay"
      />
      <Button 
        onClick={togglePlay}
        variant="outline"
        size="icon"
        className={`rounded-full w-14 h-14 shadow-lg ${isPlaying ? 'bg-envelope text-white' : 'bg-white text-envelope'}`}
      >
        <Music className={`${isPlaying ? 'animate-pulse' : ''}`} />
      </Button>
      <p className="text-xs mt-2 text-center">{isPlaying ? 'Pausar' : 'Tocar'} Música</p>
    </div>
  );
};

export default MusicPlayer;
