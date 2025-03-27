import "./styles.css";
/*import { useEffect, useState } from "react";

const cores = [
  "252, 71, 84", // Valorant
  "229, 239, 254", //God Of War
  "125, 57, 26", //Horizon Zero Dawn
];*/

const BackgroundCircles = () => {
  /*  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((prev) => (prev + 1) % cores.length);
    }, 10000); // A cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  // Atualiza a variável CSS no <html>
  useEffect(() => {
    document.documentElement.style.setProperty("--cor-jogo", cores[indice]);
  }, [indice]);*/

  return (
    <div className="backgound-circulos">
      <div className="circulos-grandes">
        <div className="circulo-grande"></div>
        <div className="circulo-grande"></div>
        <div className="circulo-grande"></div>
      </div>
      <div className="circulos-pequenos">
        <div className="circulo-pequeno"></div>
        <div className="circulo-pequeno"></div>
        <div className="circulo-pequeno"></div>
        <div className="circulo-pequeno"></div>
        <div className="circulo-pequeno"></div>
        <div className="circulo-pequeno"></div>
      </div>
    </div>
  );
};

export default BackgroundCircles;
