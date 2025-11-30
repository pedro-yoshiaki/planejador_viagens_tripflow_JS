import React, { createContext, useContext, useEffect, useState } from "react";
import viagensJSON from "../data/viagens.json";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider({ children }) {
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    const salvo = localStorage.getItem("viagens");

    if (salvo) {
      setViagens(JSON.parse(salvo));
    } else {
     
      setViagens(viagensJSON.map(v => ({ ...v })));
    }
  }, []);

  useEffect(() => {
    if (viagens.length > 0) {
      localStorage.setItem("viagens", JSON.stringify(viagens));
    }
  }, [viagens]);

  function adicionarViagem(novaViagem) {
    const id = Date.now();
    const viagemComLista = { ...novaViagem, id, atividades: [] };

    setViagens(prev => [...prev, viagemComLista]);
    return id;
  }


  function editarViagem(id, dadosAtualizados) {
    setViagens(prev =>
      prev.map(v => (v.id === id ? { ...v, ...dadosAtualizados } : v))
    );
  }

  function excluirViagem(id) {
    setViagens(prev => prev.filter(v => v.id !== id));
  }


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
