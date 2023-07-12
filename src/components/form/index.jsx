import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import CreateIcon from '@mui/icons-material/Create';
import Autocomplete from '@mui/material/Autocomplete';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Button from '@mui/material/Button';
import api from "../../services/api";

const Form = () => {
  const [formValues, setFormValues] = useState({
    descricao: '',
    valor: '',
    tipo: null
  });

  const styleDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  };

  const styleDivForm = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    padding:'25px 25px 15px 10px',
    borderRadius: '5px'
  };

  const options = [
    { label: 'Entrada' },
    { label: 'Saída' },
  ];

  const handleDescricaoChange = (event) => {
    setFormValues({
      ...formValues,
      descricao: event.target.value
    });
  };

  const handleValorChange = (event) => {
    setFormValues({
      ...formValues,
      valor: event.target.value
    });
  };

  const handleTipoChange = (event, newValue) => {
    setFormValues({
      ...formValues,
      tipo: newValue
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formValues.descricao || !formValues.valor || !formValues.tipo) {
      console.log('Por favor, preencha todos os campos');
      return;
    }

    const data = {
      descricao: formValues.descricao,
      valor: formValues.valor,
      tipo: formValues.tipo.label,
    };

    api.post('/cadastro', data)
      .then((response) => {
        console.log('Dados enviados com sucesso!', response.data);
        setFormValues({
          descricao: '',
          valor: '',
          tipo: null,
        });
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao enviar os dados:', error);
      });
  };

  return (
    <div style={styleDiv}>
      <h1 className="custom-font" style={{color:'#1565c0'}}>Formulário</h1>
      <div>
        <form style={styleDivForm} onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <CreateIcon />
            <TextField
              id="descricao"
              label="Descrição"
              variant="outlined"
              value={formValues.descricao}
              onChange={handleDescricaoChange}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AttachMoneyRoundedIcon />
            <TextField
              id="valor"
              label="Valor"
              variant="outlined"
              value={formValues.valor}
              onChange={handleValorChange}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <PointOfSaleIcon />
            <Autocomplete
              id="tipo"
              options={options}
              sx={{ width: 215 }}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="Tipo" />
              )}
              value={formValues.tipo}
              onChange={handleTipoChange}
            />
          </Box>
          <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
      </div>
    </div>
  );
};

export default Form;