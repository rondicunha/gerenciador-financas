import React, {useState, useEffect} from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import api from "../../services/api";
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';


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


const divList ={
  marginTop: '20px'
}



const List = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
      api
        .get("/")
        .then((response) => setItem(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    const handleDelete = (itemToDelete) => {
      api
        .delete(`/items/${itemToDelete.id}`)
        .then(() => {
          console.log('Item excluído da API:', itemToDelete);
          setItem(item.filter((item) => item.id !== itemToDelete.id));
        })
        .catch((err) => {
          console.error("Ops! Ocorreu um erro ao excluir o item:", err);
        });
    };

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
        {item.length === 0 ? (
              <StyledTableRow>
                <StyledTableCell colSpan={4} align="center">
                  Você ainda Não tem itens cadastrado..
                </StyledTableCell>
              </StyledTableRow>
            ) : (
              item.map((item) => (
                <StyledTableRow
                  key={item.descricao}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {item.descricao}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.valor}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.tipo === 'Entrada' ? <ArrowCircleUpRoundedIcon /> : <ArrowCircleDownRoundedIcon/>}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton aria-label="delete" onClick={() => handleDelete(item)}>
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}

export default List;
