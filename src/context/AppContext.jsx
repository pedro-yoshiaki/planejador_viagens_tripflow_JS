import React, { createContext, useContext, useEffect, useState } from "react";
import viagensJSON from "../data/viagens.json";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [viagens, setViagens] = useState([]);

  // 1️⃣ Carregar viagens do localStorage ao iniciar
  useEffect(() => {
    const salvo = localStorage.getItem("viagens");

    if (salvo) {
      setViagens(JSON.parse(salvo));
    } else {
      // carrega do JSON somente na primeira vez
      setViagens(viagensJSON.map(v => ({ ...v })));
    }
  }, []);

  // 2️⃣ Salvar no localStorage sempre que viagens mudarem
  useEffect(() => {
    if (viagens.length > 0) {
      localStorage.setItem("viagens", JSON.stringify(viagens));
    }
  }, [viagens]);

  // ➕ Adicionar viagem
  function adicionarViagem(novaViagem) {
    const id = Date.now();
    const viagemComLista = { ...novaViagem, id, atividades: [] };

    setViagens(prev => [...prev, viagemComLista]);
    return id;
  }

  // ✏️ Editar viagem
  function editarViagem(id, dadosAtualizados) {
    setViagens(prev =>
      prev.map(v => (v.id === id ? { ...v, ...dadosAtualizados } : v))
    );
  }

  // ❌ Excluir viagem
  function excluirViagem(id) {
    setViagens(prev => prev.filter(v => v.id !== id));
  }

  // ➕ Adicionar atividade
  function adicionarAtividade(idViagem, atividade) {
    setViagens(prev =>
      prev.map(v =>
        v.id === idViagem
          ? {
              ...v,
              atividades: [...(v.atividades || []), atividade]
            }
          : v
      )
    );
  }

  // API externa de câmbio (mantida)
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
