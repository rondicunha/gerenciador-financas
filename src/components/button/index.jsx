import React from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';;

const divSpace ={
    display: 'flex',
    marginTop: '100px',
    alignItems: 'center',
    justifyContent: 'center',
  }

const ButtonAdd = () => {
    return (
        <div style={divSpace}>
            <Button variant="outlined" startIcon={<AddIcon />}>
                Adicionar Entrada/Saída
            </Button>
        </div>
    );
}

export default ButtonAdd;