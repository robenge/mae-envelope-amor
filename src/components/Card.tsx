
import { useEffect, useRef } from "react";

interface CardProps {
  onLoad?: () => void;
}

const Card = ({ onLoad }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  return (
    <div 
      ref={cardRef} 
      className="card animate-float bg-cream"
    >
      <div className="golden-border">
        <h2 className="handwriting text-4xl md:text-5xl font-bold mb-6 text-center text-envelope">
          Silvana, Mãe e Esposa
        </h2>
        
        <div className="space-y-5 text-lg md:text-xl text-gray-800">
          <p className="leading-relaxed">
            Que a fé em Deus continue a crescer em seu coração, como uma árvore plantada à beira de um rio. 
            Que você continue a dar frutos na estação certa.
          </p>
          
          <p className="leading-relaxed">
            Que a sabedoria e a orientação de Deus te guiem em cada passo da sua vida, 
            para que continue a ser uma mãe e esposa maravilhosa que inspira a todos.
          </p>
        </div>
        
        <div className="mt-8 text-right">
          <p className="handwriting text-2xl font-semibold">Te amamos</p>
        </div>
        
        <div className="mt-10 text-center">
          <h3 className="handwriting text-4xl text-gold font-bold">Feliz dia das mães</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
