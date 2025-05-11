
import Envelope from "@/components/Envelope";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <header className="mb-10 text-center">
        <h1 className="handwriting text-4xl md:text-6xl font-bold text-envelope mb-2">
          Feliz Dia das Mães
        </h1>
        <p className="text-lg text-gray-600">
          Uma homenagem especial para você
        </p>
      </header>
      
      <main>
        <Envelope />
      </main>
      
      <footer className="mt-auto pt-10 text-center text-sm text-gray-500">
        <p>Com todo carinho &hearts; 2025</p>
      </footer>
    </div>
  );
};

export default Index;
