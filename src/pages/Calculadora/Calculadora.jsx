import React, { useEffect, useState } from "react";
import "./Calculadora.css"; // Vamos criar este arquivo
import CurrencyConverter from "../../components/CurrencyConverter/CurrencyConverter"

export default function Calculadora() {
  return (
    <div className="calculadora-page">
      {/* Overlay escuro para garantir leitura do menu branco */}
      <div className="calculadora-overlay"></div>
      
      {/* O componente isolado cuida de toda a lógica e exibição do card */}
      <CurrencyConverter />
      
    </div>
  );
}