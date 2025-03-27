import { Link } from "react-router-dom";
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
      <div className="menus">
        <Link to="/" className="link-menu">
          Início
        </Link>
        <Link to="/sobre" className="link-menu">
          Sobre
        </Link>
        <Link to="/lista" className="link-menu">
          Lista de Jogos
        </Link>
        <Link to="/contato" className="link-menu">
          Contato
        </Link>
      </div>
      <div class="idioma">
        <img src={logoBrasil} alt="Logo Brasil" />
      </div>
    </header>
  );
};

export default Header;
