import React, { useState, useEffect } from "react";
import Info from "../info";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import api from "../../services/api";

const Header = () => {
  const [itens, setItens] = useState([]);
  const [somaEntrada, setSomaEntrada] = useState(0);
  const [somaSaida, setSomaSaida] = useState(0);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#1565c0',
    width: '80%',
    margin: 'auto',
    color: 'white',
    paddingBottom: '70px',
    paddingTop: '30px',
    borderRadius: '5px',
  };

  const divInfoStyle = {
    backgroundColor: 'white',
    color: 'black',
    width: '300px',
    borderRadius: '10px',
    transform: 'translateX(-50%)',
    position: 'absolute',
    left: '50%',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
  };

  const headerInfo = {
    display: 'flex',
    gap: '50px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {
    api.get("/")
      .then((response) => {
        setItens(response.data);
        calcularSomas(response.data);
      })
      .catch((err) => {
        console.error("Ocorreu um erro ao buscar os itens:", err);
      });
  }, []);

  const removerItem = (itemId) => {
    api.delete(`/items/${itemId}`)
      .then(() => {
        console.log('Item excluído da API:', itemId);
        const updatedItens = itens.filter((item) => item.id !== itemId);
        setItens(updatedItens);
        calcularSomas(updatedItens);
      })
      .catch((err) => {
        console.error("Ops! Ocorreu um erro ao excluir o item:", err);
      });
  };

  const calcularSomas = (itens) => {
    const entrada = itens
      .filter((item) => item.tipo === "Entrada")
      .reduce((acc, item) => acc + parseFloat(item.valor.replace(",", ".")), 0)
      .toFixed(2);
    const saida = itens
      .filter((item) => item.tipo === "Saída")
      .reduce((acc, item) => acc + parseFloat(item.valor.replace(",", ".")), 0)
      .toFixed(2);
    setSomaEntrada(entrada);
    setSomaSaida(saida);
  };

  return (
    <div>
      <div style={containerStyle}>
        <h1 className="custom-font">Gerenciador de Finanças</h1>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ ...divInfoStyle, top: '50%', transform: 'translate(-50%, -50%)', left: '25%' }}>
          <div style={headerInfo}>
            <h3 className="custom-font">Entrada:</h3>
            <ArrowCircleUpRoundedIcon />
          </div>
          <Info parametro={somaEntrada} onRemove={removerItem} />
        </div>
        <div style={{ ...divInfoStyle, top: '50%', transform: 'translate(-50%, -50%)', left: '50%' }}>
          <div style={headerInfo}>
            <h3 className="custom-font">Saída:</h3>
            <ArrowCircleDownRoundedIcon />
          </div>
          <Info parametro={somaSaida} onRemove={removerItem} />
        </div>
        <div style={{ ...divInfoStyle, top: '50%', transform: 'translate(-50%, -50%)', left: '75%' }}>
          <div style={headerInfo}>
            <h3 className="custom-font">Total:</h3>
            <AttachMoneyRoundedIcon />
          </div>
          <Info parametro={(parseFloat(somaEntrada) - parseFloat(somaSaida)).toFixed(2)} />
        </div>
      </div>
    </div>
  );
};

export default Header;

