import React, { useState } from "react";
import "./App.css";
import pokedexImage from "../../img/pokedex.png";
import informationStats from "../../img/information.png";
import GraficoStatus from "../../pages/GraficoStatus/index";
import tipoImagens from "./app.interface";
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
      <h1>Pokédex</h1>
      <div className="layout-pokedex">
        <div className="pokedex-wrapper">
          <img src={pokedexImage} alt="Pokédex" className="pokedex-img" />
          <div className="conteudo-sobreposto">
            {resultado && !resultado.erro && (
              <div className="resultado">
                <button
                  className="botao-status"
                  onClick={() => setMostrarStatus((prev) => !prev)}
                >
                  <img src={informationStats} alt="Mostrar status" />
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
            <div
              className={`${
                !resultado
                  ? "buttons-config-vazio"
                  : resultado.erro
                  ? "buttons-config-vazio"
                  : "buttons-config"
              }`}
            >
              <input
                type="text"
                className="pokedex-input"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="nome do Pokémon"
              />
              <button className="button-click" onClick={buscarPokemon}>
                Buscar
              </button>
            </div>
          </div>
        </div>

        {mostrarStatus && resultado && !resultado.erro && (
          <div className="painel-status">
            <h3>Estatísticas</h3>

            <GraficoStatus stats={resultado.stats} />

            <div className="tipos-container">
              {resultado.tipos?.map((tipo) => (
                <img
                  key={tipo}
                  src={tipoImagens[tipo.toLowerCase()]}
                  alt={tipo}
                  className="icone-tipo"
                  title={tipo}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <footer>Criado por Kaik Silva 🚀</footer>
    </div>
  );
}

export default App;
