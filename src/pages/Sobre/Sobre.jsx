import React from 'react';
import './Sobre.css';
import HeroSobre from '../Sobre/sections/HeroSobre'
import Objetivos from '../Sobre/sections/Objetivos'
import Cores from '../Sobre/sections/Cores'
import EquipeTech from '../Sobre/sections/EquipeTech';

function Sobre() {
  return (
    <div className="sobre-page">
      
      {/* SEÇÃO 1: HERO */}
      <HeroSobre/>

      {/* SEÇÃO 2: OBJETIVOS */}
      <Objetivos/>

      {/* SEÇÃO 3: PALETA DE CORES */}
      <Cores/>

      {/* SEÇÃO 4: TECNOLOGIAS E EQUIPE */}
      <EquipeTech/>

    </div>
  );
}

export default Sobre;