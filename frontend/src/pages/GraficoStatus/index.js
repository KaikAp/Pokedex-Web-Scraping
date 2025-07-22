import React from "react";
import "./index.css";

function GraficoStatus({ stats }) {
  const estatisticas = [
    { label: "PS", valor: stats.hp },
    { label: "Atk", valor: stats.atk },
    { label: "Def", valor: stats.def },
    { label: "SpA", valor: stats.sp_atk },
    { label: "SpD", valor: stats.sp_def },
    { label: "Vel", valor: stats.speed },
  ];

  const blocosTotais = 12;
  const valorMaximo = 120;

  return (
    <div className="grafico-status">
      {estatisticas.map((stat, idx) => {
        const blocosPreenchidos = Math.round(
          (stat.valor / valorMaximo) * blocosTotais
        );

        return (
          <div className="coluna-status" key={idx}>
            {[...Array(blocosTotais)].map((_, i) => (
              <div
                key={i}
                className={`bloco ${
                  i >= blocosTotais - blocosPreenchidos ? "ativo" : ""
                }`}
              ></div>
            ))}
            <span className="label-status">{stat.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default GraficoStatus;
