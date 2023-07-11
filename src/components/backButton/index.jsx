import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';

const BackButton = () => {
    return (
         <div>
             <Button variant="contained" startIcon={<KeyboardBackspaceIcon />}>
                Voltar
            </Button>
        </div>
    );
}

export default BackButton;