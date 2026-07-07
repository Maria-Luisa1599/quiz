import "./App.css";
import imgPc from "./assets/pc.png";

import { useState } from "react";


const quiz = [
  { texto: 'Como você reage quando vê um bug em produção às 23h?', 
    opcoes: [
      'Tomo um café (o 6º do dia) e encaro de frente',
      'Aproveito "já que estou aqui" e refatoro o módulo inteiro',
      'Já escrevi um script que conserta isso sozinho enquanto durmo',
      'Deixo pro meu "eu do futuro" resolver'
    ]
  },
  { texto: 'Sua IDE favorita está cheia de:', 
    opcoes: [
      'console.log() esquecidos espalhados por todo lado',
      'Copos de café vazios ao redor do teclado',
      'Componentes copiados e colados de 3 projetos diferentes',
      '// TODO: melhorar isso depois (datado de 2019)'
    ]
  },
  { texto: 'Alguém te pede pra revisar o CSS de um botão. Você:', 
    opcoes: [
      'Pergunta se já testaram em todos os navegadores',
      'Resolve em 2 minutos',
      'Move 1px, fica satisfeito(a), some o resto do dia',
      'Cria uma extensão pra isso nunca mais acontecer'
    ]
  },
  { texto: 'Seu commit mais recente se chama:', 
    opcoes: [
      '"fix: tentativa 14 de resolver esse bug maldito"',
      '"fix: madrugada produtiva (3h da manhã)"',
      '"funciona não perguntem como" (Stack Overflow, 2021)',
      '"refactor: ninguém pediu mas tava me incomodando"'
    ]
  },
  { texto: 'O que mais te dá orgulho no seu trabalho?', 
    opcoes: [
      'Achar a causa raiz depois de 6 horas de debug',
      'Sobreviver à sprint sem dormir e entregar tudo',
      'Um pixel perfeitamente alinhado em todas as telas',
      'Nunca mais precisar fazer essa tarefa manualmente'
    ]
  }
];

function App() {

  const [showHome, setShowHome] = useState(true);
  const [indiceAtual, setIndiceAtual] = useState(0);

  const perguntaAtual = quiz[indiceAtual];

  const proxPerg = () => {
    setIndiceAtual(indiceAtual + 1)
  }

  return (
    <div className="container-app">

    {showHome ? (
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
          <button className="botaoPlay" onClick={() => setShowHome(false)}>▶ INSERT COIN</button>

          <span>TOQUE PARA COMEÇAR</span>
        </div>
      ) : (
        <div className="container quiz">
          <div className="progressBar">
            <div className={`progress ${0 <= indiceAtual ? 'filled' : ''}`}></div>
            <div className={`progress ${1 <= indiceAtual ? 'filled' : ''}`}></div>
            <div className={`progress ${2 <= indiceAtual ? 'filled' : ''}`}></div>
            <div className={`progress ${3 <= indiceAtual ? 'filled' : ''}`}></div>
            <div className={`progress ${4 <= indiceAtual ? 'filled' : ''}`}></div>
          </div>
          <span>PERGUNTA {indiceAtual + 1} de 5</span>
          <p>{perguntaAtual.texto}</p>
          <div className="perguntas">
            <div className="pergunta" onClick={proxPerg}>
              <span>A</span>
              {perguntaAtual.opcoes[0]}
            </div>
            <div className="pergunta" onClick={proxPerg}>
              <span>B</span>
              {perguntaAtual.opcoes[1]}
            </div>
            <div className="pergunta" onClick={proxPerg}>
              <span>C</span>
              {perguntaAtual.opcoes[2]}
            </div>
            <div className="pergunta" onClick={proxPerg}>
              <span>D</span>
              {perguntaAtual.opcoes[3]
            }</div>
          </div>
        </div>
      )}
    </div>

  );
}

export default App;
