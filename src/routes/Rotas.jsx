import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import Viagens from "../pages/Viagens/Viagens";
import Cronograma from "../pages/Cronograma";
import Calculadora from "../pages/Calculadora/Calculadora";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/viagens" element={<Viagens />} />
      <Route path="/cronograma" element={<Cronograma />} />
      <Route path="/viagem/:id/cronograma" element={<Cronograma />} />
      <Route path="/calculadora" element={<Calculadora />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
