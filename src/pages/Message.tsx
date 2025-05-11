
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@/components/Card";
import MusicPlayer from "@/components/MusicPlayer";
import ConfettiEffect from "@/components/ConfettiEffect";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Message = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const handleCardLoad = () => {
    setShowConfetti(true);
  };

  return (
    <div className="min-h-screen flex flex-col py-10 px-4 relative">
      {showConfetti && <ConfettiEffect />}
      
      <header className="mb-8 text-center">
        <h1 className="handwriting text-4xl md:text-5xl font-bold text-envelope mb-2">
          Uma mensagem especial para você
        </h1>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <Card onLoad={handleCardLoad} />
      </main>
      
      <div className="flex justify-center mt-10 mb-10">
        <Button
          onClick={() => navigate("/")}
          className="bg-envelope hover:bg-envelope/90 text-white rounded-md px-6 py-2 flex items-center gap-2"
        >
          <Heart size={18} fill="#fff" /> Voltar
        </Button>
      </div>
      
      <MusicPlayer />
      
      <footer className="mt-auto pt-4 text-center text-sm text-gray-500">
        <p>Com todo carinho &hearts; 2025</p>
      </footer>
    </div>
  );
};

export default Message;
