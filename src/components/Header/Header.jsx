import "./styles.css";
import logo from "../../assets/Logo.png";
import logoBrasil from "../../assets/Logo Brasil.png";

const Header = () => {
  return (
    <header className="header">
      <div class="logo">
        <img src={logo} alt="Logo do site" />
        <p>Run That Game</p>
      </div>
      <div class="menus">
        <a href="facebook.com" className="link-menu">
          Início
        </a>
        <a href="facebook.com" className="link-menu">
          Sobre
        </a>
        <a href="facebook.com" className="link-menu">
          Lista de Jogos
        </a>
        <a href="facebook.com" className="link-menu">
          Contato
        </a>
      </div>
      <div class="idioma">
        <img src={logoBrasil} alt="Logo Brasil" />
      </div>
    </header>
  );
};

export default Header;
