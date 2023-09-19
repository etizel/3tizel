import { useEffect, useState } from 'react';
import './App.css';

function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para verificar a visibilidade do elemento e ativar a animação
  const checkVisibility = () => {
    const element = document.getElementById('fadeInElement');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      setIsVisible(elementPosition < screenHeight);
    }
  };

  // UseEffect para verificar a visibilidade ao montar o componente e ao rolar a página
  useEffect(() => {
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        id="fadeInElement"
        className={`transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } duration-1000`}
      >
        <h1 className="text-4xl">Scroll para ver a animação</h1>
      </div>
    </div>
  );
}

export default Scroll;
