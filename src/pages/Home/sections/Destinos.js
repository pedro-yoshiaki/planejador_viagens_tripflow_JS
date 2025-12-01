import React from 'react';
import Button from '../../../components/common/Button/Button';
import './Destinos.css';
import { destinos } from '../../../data/destinos';
import TravelCard from '../../../components/features/TravelCard/TravelCard';
import {FaChevronLeft, FaChevronRight, FaUmbrellaBeach } from 'react-icons/fa';
import { useRef } from 'react';

function Destino (){
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

    // Função provisória de agendamento
    const handleAgendar = (destino) => {
        alert(`Você clicou em agendar para: ${destino.nome}.\n(Em breve: Conexão com sites de viagem)`);
    };
    return (
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
    );
}

export default Destino;