import React, { useState, useEffect } from "react";
import Info from "../info";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import api from "../../services/api";

const Header = () => {
  const [itens, setItens] = useState([]);

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
  };

  const headerInfo = {
    display: 'flex',
    gap: '50px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  useEffect(() => {
    api.get("/")
      .then((response) => setItens(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro ao buscar os itens:", err);
      });
  }, []);

  const removerItem = (itemId) => {
    setItens((prevItens) => prevItens.filter((item) => item.id !== itemId));
  };

  const somaEntrada = itens
    .filter((item) => item.tipo === "Entrada")
    .reduce((acc, item) => acc + parseFloat(item.valor.replace(",", ".")), 0)
    .toFixed(2);

  const somaSaida = itens
    .filter((item) => item.tipo === "Saída")
    .reduce((acc, item) => acc + parseFloat(item.valor.replace(",", ".")), 0)
    .toFixed(2);

  return (
    <div>
      <div style={containerStyle}>
        <h1>Gerenciador de Finanças</h1>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ ...divInfoStyle, top: '50%', transform: 'translate(-50%, -50%)', left: '25%' }}>
          <div style={headerInfo}>
            <h3>Entrada:</h3>
            <ArrowCircleUpRoundedIcon />
          </div>
          <Info parametro={somaEntrada} onRemove={() => removerItem(item.id)} />
        </div>
        <div style={{ ...divInfoStyle, top: '50%', transform: 'translate(-50%, -50%)', left: '50%' }}>
          <div style={headerInfo}>
            <h3>Saída:</h3>
            <ArrowCircleDownRoundedIcon />
          </div>
          <Info parametro={somaSaida} onRemove={() => removerItem(item.id)} />
        </div>
        <div style={{ ...divInfoStyle, top: '50%', transform: 'translate(-50%, -50%)', left: '75%' }}>
          <div style={headerInfo}>
            <h3>Total:</h3>
            <AttachMoneyRoundedIcon />
          </div>
          <Info parametro={(parseFloat(somaEntrada) - parseFloat(somaSaida)).toFixed(2)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
