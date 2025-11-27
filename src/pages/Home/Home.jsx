import React from "react";
import './Home.css';
import CtaCronograma from './sections/CtaCronograma';
import CtaCambio from './sections/CtaCambio';
import Hero from './sections/Hero';
import Feature from './sections/Features';
import Destino from './sections/Destinos';

function Home() {
  
  return (
    <div className="home-container">
      <Hero />
      <Feature />
      <Destino />
      <CtaCronograma />
      <CtaCambio />
    </div>
  );
}
export default Home;