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


  /* --- CRUD ATIVIDADES (NOVO) --- */
  
  // Adicionar (agora gera ID único para a atividade)
  function adicionarAtividade(idViagem, atividade) {
    const novaAtividade = { ...atividade, id: Date.now() }; // Gera ID único
    
    setViagens(prev =>
      prev.map(v =>
        v.id === idViagem
          ? { ...v, atividades: [...(v.atividades || []), novaAtividade] }
          : v
      )
    );
  }

  // Editar Atividade
  function editarAtividade(idViagem, atividadeAtualizada) {
    setViagens(prev =>
      prev.map(v => {
        if (v.id !== idViagem) return v;
        return {
          ...v,
          atividades: v.atividades.map(a => 
            a.id === atividadeAtualizada.id ? atividadeAtualizada : a
          )
        };
      })
    );
  }

  // Excluir Atividade
  function excluirAtividade(idViagem, idAtividade) {
    setViagens(prev =>
      prev.map(v => {
        if (v.id !== idViagem) return v;
        return {
          ...v,
          atividades: v.atividades.filter(a => a.id !== idAtividade)
        };
      })
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
        editarAtividade,
        excluirAtividade,
        buscarCambio
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
