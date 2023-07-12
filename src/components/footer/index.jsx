import React from 'react';


const footerStyle = {
    backgroundColor: '#1565c0',
    padding: '3px',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    color: '#f2f2f2',
    fontSize: '10px',
  }
const Footer = () => {
  return (
    <div style={footerStyle} className="custom-font">
      App para a matéria de desenvolvimento web da Escola de Ciência e Tecnologia. Desenvolvedores: Laiana e Rondinelle.
    </div>
  );
};

export default Footer;