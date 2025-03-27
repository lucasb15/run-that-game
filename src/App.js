import BackgroundCircles from "./components/BackgroundCircles/BackgoundCircles";
import BackgoundRectangle from "./components/BackgroundRectangle/BackgoundRectangle";
import Header from "./components/Header/Header";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <BackgroundCircles />
      <BackgoundRectangle />
      <Header />
    </div>
  );
}

export default App;
