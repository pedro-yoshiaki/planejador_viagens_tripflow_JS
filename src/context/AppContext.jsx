import React, { createContext, useContext, useEffect, useState } from "react";
import viagensJSON from "../data/viagens.json";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [viagens, setViagens] = useState([]);

  // Carregar dados do JSON ao iniciar
  useEffect(() => {
    setViagens(viagensJSON.map(v => ({ ...v })));
  }, []);

  // CRUD: Adicionar viagem
  function adicionarViagem(novaViagem) {
    const id = Date.now();
    setViagens(prev => [...prev, { ...novaViagem, id }]);
    return id;
  }

  // CRUD: Editar viagem
  function editarViagem(id, dadosAtualizados) {
    setViagens(prev =>
      prev.map(v => (v.id === id ? { ...v, ...dadosAtualizados } : v))
    );
  }

  // CRUD: Excluir viagem
  function excluirViagem(id) {
    setViagens(prev => prev.filter(v => v.id !== id));
  }

  // CRUD: Adicionar atividade
  function adicionarAtividade(idViagem, atividade) {
    setViagens(prev =>
      prev.map(v =>
        v.id === idViagem
          ? { ...v, atividades: [...(v.atividades || []), atividade] }
          : v
      )
    );
  }

  // API de câmbio
  async function buscarCambio(codigo = "USD-BRL,EUR-BRL") {
    try {
      const url = `https://economia.awesomeapi.com.br/json/last/${codigo}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Erro ao buscar câmbio:", err);
      return null;
    }
  }

  return (
    <AppContext.Provider
      value={{
        viagens,
        adicionarViagem,
        editarViagem,
        excluirViagem,
        adicionarAtividade,
        buscarCambio
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
