import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
