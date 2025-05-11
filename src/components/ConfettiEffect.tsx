
import { useEffect, useState } from 'react';
import { Sparkles, PartyPopper } from 'lucide-react';

interface ConfettiProps {
  color: string;
  delay: number;
  duration: number;
  left: string;
}

const Confetti = ({ color, delay, duration, left }: ConfettiProps) => {
  return (
    <div 
      className="confetti" 
      style={{
        '--color': color,
        '--delay': `${delay}s`,
        '--fall-duration': `${duration}s`,
        left: left,
        top: '-20px'
      } as React.CSSProperties}
    />
  );
};

const ConfettiEffect = () => {
  const [confetti, setConfetti] = useState<ConfettiProps[]>([]);

  useEffect(() => {
    const colors = ['#ea384c', '#D4AF37', '#9b59b6', '#3498db', '#e67e22', '#2ecc71'];
    const newConfetti = [];

    // Generate 100 confetti pieces
    for (let i = 0; i < 100; i++) {
      newConfetti.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 5,
        left: `${Math.random() * 100}%`
      });
    }

    setConfetti(newConfetti);

    // Remove confetti after some time
    const timer = setTimeout(() => {
      setConfetti([]);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="confetti-container">
      {confetti.map((props, index) => (
        <Confetti key={index} {...props} />
      ))}
      <div className="fixed top-10 left-10 animate-float text-envelope">
        <PartyPopper size={40} />
      </div>
      <div className="fixed top-10 right-10 animate-float text-gold">
        <Sparkles size={40} />
      </div>
      <div className="fixed bottom-20 left-20 animate-float text-envelope">
        <Sparkles size={30} />
      </div>
    </div>
  );
};

export default ConfettiEffect;
