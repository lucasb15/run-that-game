import "./styles.css";
import minhaImagem from "../../assets/Capa/Valorant.png";

const BackgoundRectangle = () => {
  return (
    <div className="capa-jogos">
      <div class="img-capa">
        <img src={minhaImagem} alt="Capa do jogo" className="capaJogo" />
      </div>
      <div className="rectangles">
        <div class="rectangle"></div>
        <div class="rectangle"></div>
        <div class="rectangle"></div>
      </div>
    </div>
  );
};

export default BackgoundRectangle;
