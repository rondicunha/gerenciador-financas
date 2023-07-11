import React from "react";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import CreateIcon from '@mui/icons-material/Create';
import Autocomplete from '@mui/material/Autocomplete';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Button from '@mui/material/Button';

const Form = () => {
    const styleDiv = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }

    const styleDivForm = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '20px'
    }

    const options = [
        {label: 'Entrada'},
        {label: 'Saída'}
    ]

    return (
        <div style={styleDiv}>
            <h1>Formulário</h1>
            <div>
                <form style={styleDivForm} action="">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <CreateIcon />
                        <TextField id="outlined-basic" label="Descrição" variant="outlined" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <AttachMoneyRoundedIcon />
                        <TextField id="outlined-basic" label="Valor" variant="outlined" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
                        <PointOfSaleIcon />
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={options}
                        sx={{ width: 225 }}
                        renderInput={(params) => <TextField {...params} label="Tipo" />}
                    />
                    </Box>
                    <Button type="submit" variant="contained">Cadastrar</Button>
                </form>
            </div>
        </div>
    );
}

export default Form;