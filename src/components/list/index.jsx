import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(descricao, valor, tipo) {
  return { descricao, valor, tipo };
}

const rows = [
  createData('Salário', 1500, "Entrada"),
  createData('Shopping', 400, "Saída"),
  createData('comida', 200, "Saída"),
  createData('Freelancer', 100, "Entrada"),
  createData('Mesada', 500, "Entrada"),
];


  const divList ={
    marginTop: '20px'
  }

const List = () => {
    return (
        <div style={divList}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="costomized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Descrição:</StyledTableCell>
            <StyledTableCell align="right">Valor:</StyledTableCell>
            <StyledTableCell align="right">Tipo:</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.descricao}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.descricao}
              </StyledTableCell>
              <StyledTableCell align="right">{row.valor}</StyledTableCell>
              <StyledTableCell align="right">{row.tipo}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}

export default List;