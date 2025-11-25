import React from "react";

function Sobre() {
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: "1.7",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Sobre o Projeto
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        O <strong>Planejador de Viagens</strong> é uma aplicação desenvolvida com
        foco em organização, praticidade e experiência do usuário. O objetivo é
        oferecer uma forma simples e completa de gerenciar viagens pessoais,
        permitindo cadastrar destinos, cronogramas e atividades detalhadas sem
        complicações.
      </p>

      <h2 style={{ marginTop: "30px" }}>🎯 Objetivos do Sistema</h2>

      <ul style={{ fontSize: "17px", marginTop: "10px" }}>
        <li>Facilitar o planejamento de viagens.</li>
        <li>Evitar conflitos de datas automaticamente.</li>
        <li>Organizar atividades com detalhes completos.</li>
        <li>Oferecer uma interface clara e fácil de usar.</li>
      </ul>

      <h2 style={{ marginTop: "30px" }}>💻 Tecnologias Utilizadas</h2>
      <p style={{ fontSize: "17px" }}>
        O sistema foi desenvolvido utilizando:
      </p>

      <ul style={{ fontSize: "17px" }}>
        <li><strong>React.js</strong> — estrutura principal do front-end</li>
        <li><strong>React Router</strong> — gerenciamento de rotas</li>
        <li><strong>Context API</strong> — controle global de dados</li>
        <li><strong>CSS inline e componentes</strong> — estilização simples</li>
      </ul>

      <h2 style={{ marginTop: "30px" }}>👥 Equipe</h2>

      <p style={{ fontSize: "17px" }}>
        Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Web 2, aplicando práticas modernas de front-end.
      </p>
    </div>
  );
}

export default Sobre;
