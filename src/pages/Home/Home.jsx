import React from "react";
import './Home.css';
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import Button from '../../components/Button/Button';
import TravelCard from '../../components/TravelCard/TravelCard';
import { FaSuitcase, FaCalendarAlt, FaLock, FaChevronLeft, FaChevronRight, FaUmbrellaBeach } from 'react-icons/fa';
import { useRef } from "react";
// Dados
import { destinos } from '../../data/destinos';

function Home() {
  // Referência para o container do carrossel
  const carouselRef = useRef(null);

  // Função de Scroll Inteligente
  const scroll = (direction) => {
    const { current } = carouselRef;
    if (current) {
      // Descobre a largura de um item (card + gap) dinamicamente
      // Pega o primeiro filho (primeiro card) para medir
      const cardWidth = current.children[0].clientWidth + 24; // 24 é o gap do CSS
      
      if (direction === 'left') {
        current.scrollLeft -= cardWidth;
      } else {
        current.scrollLeft += cardWidth;
      }
    }
  };

  // Função provisória de agendamento (Integrante 1 vai conectar isso ao App.js depois)
  const handleAgendar = (destino) => {
    alert(`Você clicou em agendar para: ${destino.nome}.\n(Em breve: Adiciona ao Cronograma)`);
  };

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

            <Button to="/viagens" variant="primary">
              Começar
            </Button>
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
              icon={<FaSuitcase />}
              title="Planejamento de Viagens"
              text="Cadastre suas viagens com datas, fotos e informações essenciais. O sistema impede conflitos de calendário automaticamente."
            />

            <FeatureCard 
              icon={<FaCalendarAlt />}
              title="Cronograma por Dia"
              text="Adicione atividades com horário, local, valor e endereço. Tudo organizado automaticamente por data."
            />

            <FeatureCard 
              icon={<FaLock />}
              title="Sem Conflitos"
              text="O sistema detecta automaticamente se uma atividade ou viagem entra em conflito com outras datas."
            />
          </div>

          <div className="features-action">
            <Button to="/sobre" variant="outline">
              Saiba mais sobre nós
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: CARROSSEL DE VIAGENS (NOVO) */}
      <section className="carousel-section">
        <div className="container">
          <div className="section-header">
            <h2>
              Destinos em Alta <FaUmbrellaBeach style={{ color: 'var(--secondary)', marginLeft: '10px' }} />
            </h2>
            <div className="carousel-actions">
              {/* Setas de Navegação */}
              <button onClick={() => scroll('left')} className="nav-btn">
                <FaChevronLeft />
              </button>
              <button onClick={() => scroll('right')} className="nav-btn">
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Lista de Cards (Mapeando o arquivo destinos.js) */}
          <div className="carousel-container" ref={carouselRef}>
            {destinos.map((item) => (
              <div key={item.id} className="carousel-item"> {/* Wrapper para o snap funcionar bem */}
                <TravelCard 
                  data={item} 
                  onAgendar={handleAgendar} 
                />
              </div>
            ))}
          </div>

          <div className="center-btn">
            <Button to="/viagens" variant="outline">
              Explorar Todos os Destinos
            </Button>
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
