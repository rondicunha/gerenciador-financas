import React, { useState, useEffect } from "react";
import Info from "../info";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import api from "../../services/api";

const Header = ({ somaEntrada, somaSaida }) => {

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

  return (
    <div>
      <div style={containerStyle}>
        <h1 className="custom-font">Gerenciador de Finanças</h1>
      </div>
      <div style={{ position: "relative" }}>
        <div
          style={{
            ...divInfoStyle,
            top: "50%",
            transform: "translate(-50%, -50%)",
            left: "25%",
          }}
        >
          <div style={headerInfo}>
            <h3 className="custom-font">Entrada:</h3>
            <ArrowCircleUpRoundedIcon />
          </div>
          <Info parametro={somaEntrada} />
        </div>
        <div
          style={{
            ...divInfoStyle,
            top: "50%",
            transform: "translate(-50%, -50%)",
            left: "50%",
          }}
        >
          <div style={headerInfo}>
            <h3 className="custom-font">Saída:</h3>
            <ArrowCircleDownRoundedIcon />
          </div>
          <Info parametro={somaSaida} />
        </div>
        <div
          style={{
            ...divInfoStyle,
            top: "50%",
            transform: "translate(-50%, -50%)",
            left: "75%",
          }}
        >
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

