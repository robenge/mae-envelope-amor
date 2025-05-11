
import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Envelope = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/message');
  };

  return (
    <div 
      className="envelope-container flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`envelope animate-float my-5 cursor-pointer`}>
        <div className="envelope-front">
          <Heart 
            size={80} 
            fill="#fff" 
            stroke="#fff" 
            className={`animate-pulse-slow ${isHovered ? 'scale-110 transition-transform' : ''}`}
          />
        </div>
        <div 
          className="envelope-flap" 
          style={{ 
            transform: isHovered ? 'rotateX(180deg)' : 'rotateX(0deg)',
            transition: 'transform 0.5s ease-in-out'
          }} 
        />
        <div className="envelope-back" />
      </div>
      
      <Button 
        onClick={handleClick}
        className="mt-6 bg-envelope hover:bg-envelope/90 text-white font-medium px-8 py-6 text-lg rounded-md shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        Abrir Mensagem
      </Button>
      
      <p className="text-center mt-4 text-gray-600">
        Clique para ver a mensagem especial
      </p>
    </div>
  );
};

export default Envelope;
