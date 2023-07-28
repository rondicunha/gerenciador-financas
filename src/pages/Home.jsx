import React, { useState, useEffect } from "react";
import Header from "../components/header";
import List from "../components/list";
import ButtonAdd from "../components/button";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import api from "../services/api";

function Home() {
  const [itens, setItens] = useState([]);
  const [somaEntrada, setSomaEntrada] = useState(0);
  const [somaSaida, setSomaSaida] = useState(0);

  useEffect(() => {
    fetchItens();
  }, []);

  const fetchItens = () => {
    api
      .get("/")
      .then((response) => {
        setItens(response.data);
        calcularSomas(response.data);
      })
      .catch((err) => {
        console.error("Ocorreu um erro ao buscar os itens:", err);
      });
  };

  const calcularSomas = (itens) => {
    const entrada = itens
      .filter((item) => item.tipo === "Entrada")
      .reduce((acc, item) => acc + parseFloat(item.valor), 0)
      .toFixed(2);
    const saida = itens
      .filter((item) => item.tipo === "Saída")
      .reduce((acc, item) => acc + parseFloat(item.valor), 0)
      .toFixed(2);
    setSomaEntrada(entrada);
    setSomaSaida(saida);
  };

  const handleDelete = (itemToDelete) => {
    api
      .delete(`/items/${itemToDelete.id}`)
      .then(() => {
        console.log("Item excluído da API:", itemToDelete);
        setItens(itens.filter((item) => item.id !== itemToDelete.id));
        calcularSomas(itens.filter((item) => item.id !== itemToDelete.id));
      })
      .catch((err) => {
        console.error("Ops! Ocorreu um erro ao excluir o item:", err);
      });
  };

  return (
    <div>
      <Header
        somaEntrada={somaEntrada}
        somaSaida={somaSaida}
      />
      <Link to="/cadastro" style={{ textDecoration: "none" }}>
        <ButtonAdd />
      </Link>
      <List itens={itens} onDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default Home;