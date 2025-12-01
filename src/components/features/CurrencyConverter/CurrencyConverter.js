// Componente usado em "Câmbio" para converter moedas (Euro, Dólar, Libra) para Real

import React, { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import Button from "../../common/Button/Button"
import { FaExchangeAlt, FaMoneyBillWave } from "react-icons/fa";
import "./CurrencyConverter.css";

function CurrencyConverter() {
  const { buscarCambio } = useAppContext();
  const [taxas, setTaxas] = useState(null);
  const [valor, setValor] = useState("");
  const [moeda, setMoeda] = useState("USDBRL");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await buscarCambio("USD-BRL,EUR-BRL,GBP-BRL");
      setTaxas(data);
      setLoading(false);
    })();
  }, [buscarCambio]);

  function converter() {
    if (!taxas || !valor) return;
    
    const info = taxas[moeda];
    const bid = Number(info.bid);
    const total = Number(valor) * bid;
    
    setResultado({
      valorOrigem: Number(valor).toFixed(2),
      valorFinal: total.toFixed(2),
      moedaOrigem: info.code,
      cotacao: bid.toFixed(2)
    });
  }

  return (
    <div className="calculadora-card">
      <div className="card-header-calc">
        <div className="icon-bg">
          <FaMoneyBillWave />
        </div>
        <h1>Conversor de Moedas</h1>
        <p>Planeje seus gastos internacionais com a cotação atual.</p>
      </div>

      {loading ? (
        <p className="loading-text">Carregando cotações...</p>
      ) : (
        <div className="form-conversao">
          <div className="input-group">
            <label>Valor para converter</label>
            <div className="input-wrapper">
              <span className="currency-symbol">
                {moeda.includes('USD') ? '$' : moeda.includes('EUR') ? '€' : '£'}
              </span>
              <input
                type="number"
                placeholder="0.00"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          <div className="swap-icon">
            <FaExchangeAlt />
          </div>

          <div className="input-group">
            <label>Moeda de Origem</label>
            <select 
              value={moeda} 
              onChange={(e) => {
                setMoeda(e.target.value);
                setResultado(null);
              }}
              className="select-field"
            >
              <option value="USDBRL">🇺🇸 Dólar Americano (USD)</option>
              <option value="EURBRL">🇪🇺 Euro (EUR)</option>
              <option value="GBPBRL">🇬🇧 Libra Esterlina (GBP)</option>
            </select>
          </div>

          <div className="action-area">
            <Button onClick={converter} variant="primary" style={{width: '100%'}}>
              Calcular Conversão
            </Button>
          </div>

          {resultado && (
            <div className="resultado-box animate-fade-in">
              <span className="label-resultado">Você terá aproximadamente:</span>
              <div className="valor-destaque">
                R$ {resultado.valorFinal}
              </div>
              <div className="detalhe-cotacao">
                Cotação: 1 {resultado.moedaOrigem} = R$ {resultado.cotacao}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;