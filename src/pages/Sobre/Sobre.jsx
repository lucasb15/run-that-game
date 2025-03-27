import BackgroundCircles from "../../components/BackgroundCircles/BackgoundCircles";
import Header from "../../components/Header/Header";
import "./styles.css";

const Sobre = () => {
  return (
    <div class="sobre">
      <BackgroundCircles />
      <Header />
      <div class="container">
        <div class="sobre">
          <h1 class="titulo">Sobre</h1>
          <p className="texto texto-1">
            A ideia do site veio da necessidade de um dos desenvolvedores de
            montar um computador e com isso percebeu que não tinha um site que
            ajudava a pessoas que não tem tanta familiaridade com as peças.
          </p>
        </div>
        <div class="diferenciais">
          <h2 class="titulo">Diferenciais</h2>
          <ul className="lista">
            <li className="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="texto">
              Integer non ipsum vel dui fermentum finibus ut sit amet arcu.
            </li>
            <li className="texto">
              Aliquam id tortor ut lorem malesuada hendrerit.
            </li>
            <li className="texto">
              Morbi vehicula felis nec nulla gravida dapibus.
            </li>
          </ul>
        </div>
        <div class="informacoesImportantes">
          <h3 class="titulo">Informações Importantes</h3>
          <p className="texto">
            As informações como ranking, consumo de energia e preço são
            retirados de sites externos na internet.
          </p>
          <p class="texto">
            O preço é atualizado diariamente ás 08:00 então dependendo do site o
            preço pode estar desatualizado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
