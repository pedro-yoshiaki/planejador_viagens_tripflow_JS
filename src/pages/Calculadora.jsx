import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

export default function Calculadora() {
  const { buscarCambio } = useAppContext();
  const [taxas, setTaxas] = useState(null);
  const [valor, setValor] = useState("");
  const [moeda, setMoeda] = useState("USDBRL");
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await buscarCambio("USD-BRL,EUR-BRL");
      setTaxas(data);
    })();
  }, []);

  function converter() {
    if (!taxas) return;
    const info = taxas[moeda];
    const bid = Number(info.bid);
    setResultado((Number(valor) * bid).toFixed(2));
  }

  return (
    <div>
      <h1>Calculadora de Câmbio</h1>

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={e => setValor(e.target.value)}
      /><br />

      <select value={moeda} onChange={e => setMoeda(e.target.value)}>
        <option value="USDBRL">USD → BRL</option>
        <option value="EURBRL">EUR → BRL</option>
      </select><br />

      <button onClick={converter}>Converter</button>

      {resultado && <p>Resultado: R$ {resultado}</p>}
    </div>
  );
}
