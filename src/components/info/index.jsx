import React from 'react';

const divStyle = {  
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    fontSize: '20px',
    padding: '0',
    margin: '0'
    };

const Info = (param) => {

    return (
        <div style={divStyle}>
            <span>R$</span>
            
            <p>{param.parametro}</p>

        </div>
    );
}

export default Info;