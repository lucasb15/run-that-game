import BackgroundCircles from "../../components/BackgroundCircles/BackgoundCircles";
import BackgoundRectangle from "../../components/BackgroundRectangle/BackgoundRectangle";
import Header from "../../components/Header/Header";
import "./styles.css";

const Home = () => {
  return (
    <div class="home">
      <BackgroundCircles />
      <BackgoundRectangle />
      <Header />
      <div className="iniciar">
        <div className="textos">
          <h1 className="texto-principal">
            Monte o PC dos Seus Sonhos Baseado nos Jogos que Você Ama!
          </h1>
          <p className="texto-secundario">
            Descubra a configuração ideal para o seu PC de jogos com base nos
            seus títulos favoritos e orçamento!
          </p>
        </div>
        <button className="btn-iniciar">INICIAR</button>
      </div>
    </div>
  );
};

export default Home;
