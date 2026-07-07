import "./App.css";
import imgPc from "./assets/pc.png";




function App() {


  return (
    <div className="container-app">
      <div className="container">
          <img src={imgPc} alt="Computador" />
          <div className="title">
            <p>
              QUE TIPO DE <br />
              <span id="pinkTitle"> PROGRAMADOR </span> <br />
              <span id="blueTitle">VOCÊ É?</span>
            </p>
            <span>
              Descubra seu espírito programador em 5 perguntas rápidas.
            </span>
          </div>
          <button className="botaoPlay">▶ INSERT COIN</button>

          <span>TOQUE PARA COMEÇAR</span>
        </div>
    </div>

  );
}

export default App;
