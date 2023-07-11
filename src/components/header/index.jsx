import React from "react";
import Info from "../info";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

const Header = () => {
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

  const headerInfo ={
    display: 'flex',
    gap: '50px',
    justifyContent: 'center',
    alignItems: 'center',
  }

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
                <Info />
            </div>
            <div style={{ ...divInfoStyle, top: '50%', transform: 'translate(-50%, -50%)', left: '50%' }}>
            <div style={headerInfo}>
                <h3>Saída:</h3>
                <ArrowCircleDownRoundedIcon />
                </div>
                <Info />
            </div>
            <div style={{ ...divInfoStyle, top: '50%', transform: 'translate(-50%, -50%)', left: '75%' }}>
            <div style={headerInfo}>
                <h3>Total:</h3>
                <AttachMoneyRoundedIcon />
                </div>
                <Info />
            </div>
        </div>
    </div>
  );
}

export default Header;
