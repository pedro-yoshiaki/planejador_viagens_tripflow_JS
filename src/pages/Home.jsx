import React from "react";

function Home() {
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

export default Home;
