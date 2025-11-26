import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import FeatureCard from "../../components/FeatureCard/FeatureCard";

function Home() {
  return (
    <div className="home-container">
      
      {/* SEÇÃO 1: HERO (Imagem de fundo + Texto Principal) */}
      <section className="hero-section">
        <div className="hero-overlay"> {/* Camada escura para melhorar leitura */}
          <div className="hero-content">
            <h1 className="hero-title">
              Bem-vindo ao Planejador de Viagens
            </h1>
            
            <p className="hero-text">
              Organize todas as suas viagens em um só lugar. Planeje datas, atividades,
              locais e acompanhe seus roteiros com facilidade.
            </p>

            <Link to="/viagens" className="hero-btn">
              Começar
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: FUNCIONALIDADES */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2>O que o TripFlow oferece?</h2>
            <p>Tudo o que você precisa para uma viagem tranquila.</p>
          </div>

          <div className="features-grid">
            {/* Agora usamos o componente 3 vezes, passando dados diferentes */}
            
            <FeatureCard 
              icon="🧳"
              title="Planejamento de Viagens"
              text="Cadastre suas viagens com datas, fotos e informações essenciais. O sistema impede conflitos de calendário automaticamente."
            />

            <FeatureCard 
              icon="📅"
              title="Cronograma por Dia"
              text="Adicione atividades com horário, local, valor e endereço. Tudo organizado automaticamente por data."
            />

            <FeatureCard 
              icon="🔒"
              title="Sem Conflitos"
              text="O sistema detecta automaticamente se uma atividade ou viagem entra em conflito com outras datas."
            />
          </div>

          <div className="features-action">
            <Link to="/sobre" className="btn-outline">
              Saiba Mais sobre Nós
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Home;











/* function Home() {
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Bem-vindo ao Planejador de Viagens ✈️
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px", textAlign: "center" }}>
        Organize todas as suas viagens em um só lugar. Planeje datas, atividades,
        locais e acompanhe seus roteiros com facilidade.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            width: "260px",
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>🧳 Planejamento de Viagens</h3>
          <p>
            Cadastre suas viagens com datas, fotos e informações essenciais. O
            sistema impede conflitos de calendário automaticamente.
          </p>
        </div>

        <div
          style={{
            width: "260px",
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>📅 Cronograma por Dia</h3>
          <p>
            Adicione atividades com horário, local, valor e endereço. Tudo organizado
            automaticamente por data.
          </p>
        </div>

        <div
          style={{
            width: "260px",
            background: "#f5f5f5",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>🔒 Sem Conflitos</h3>
          <p>
            O sistema detecta automaticamente se uma atividade ou viagem entra em
            conflito com outras datas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home; */
