import React, { useState } from "react";
import "./App.css";
import pokedexImage from "./img/pokedex.png";
import informationStats from "./img/information.png"

function App() {
  const [nome, setNome] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mostrarStatus, setMostrarStatus] = useState(false);


  async function buscarPokemon() {
    const res = await fetch("http://localhost:8000/buscar-pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome }),
    });

    const data = await res.json();
    setResultado(data);
  }

  return (
    <div className="container">
      <h1>Pokedex</h1>
      <div className="pokedex-wrapper">
        <img src={pokedexImage} alt="Pokédex" className="pokedex-img" />
        <div className="conteudo-sobreposto">
          {resultado && !resultado.erro && (
            <div className="resultado">
  <button className="botao-status" onClick={() => setMostrarStatus((prev) => !prev)}>
    <img src={informationStats}  alt="Mostrar status" />
  </button>
              <img
                src={resultado.imagem}
                className="img-pokemon"
                alt={resultado.nome}
              />
              <h2 className="nome-pokemon">
                {resultado.nome} #{parseInt(resultado.numero, 10)}
              </h2>
            </div>
          )}
          <input
            type="text"
            className="pokedex-input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="nome do Pokémon"
          />
          <button className="button-click" onClick={buscarPokemon}>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
