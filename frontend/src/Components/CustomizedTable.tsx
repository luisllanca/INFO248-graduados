import React, { useState, useEffect, FC } from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableHead = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableHead);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function getFecha(fecha : string) {
  var info = fecha.split('-');
  return `${info[2].substring(0,2)}/${info[1]}/${info[0]}`;
}

function getTotal(comps: any[]) {
  let total = 0;
  comps.forEach(comp => total += comp.monto);
  return `$${total}`;
}

const estudiante =
    localStorage.getItem("est") !== "undefined"
      ? JSON.parse(localStorage.getItem("est")!)
      : localStorage.clear();

const CustomizedTable = () => {
    const classes = useStyles();
    let c = 0;
    
    const [comps, setComps] = useState<Array<any>>([]);

    useEffect(() => {
      const fetchCompsData = async () => {
        const data = await fetch(`http://localhost:8080/estudiante/${estudiante.id}/comprobantes`)
          .then((res) => res.json());
        setComps(data.Comps);
      }
    
      fetchCompsData();
    
    }, [])

    return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <StyledTableCell>N° de comprobante</StyledTableCell>
            <StyledTableCell align="right">Fecha</StyledTableCell>
            <StyledTableCell align="right">Tipo</StyledTableCell>
            <StyledTableCell align="right">Monto</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comps.map((comp) => (
            <TableRow key={comp.id}>
              <TableCell>{comp.id}</TableCell>
              <TableCell align="right">{getFecha(comp.fecha)}</TableCell>
              <TableCell align="right">{comp.tipo}</TableCell>
              <TableCell align="right">${comp.monto}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell align="right"><b>Total</b></TableCell>
            <TableCell align="right"><b>{getTotal(comps)}</b></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default CustomizedTable;