import React, { useState, useEffect, FC } from 'react'
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from '@material-ui/core';
import axios from 'axios';
import { ToastContainer, toast, Flip } from "react-toastify";

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


const useStyles = makeStyles({
  table: {
    minWidth: 500,
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

const estudiante = localStorage.getItem("est") !== "undefined"
  ? JSON.parse(localStorage.getItem("est")!)
  : localStorage.clear();

const CustomizedTable = () => {
    const classes = useStyles();
    let c = 0;

    const [state, setState] = useState(false);
    const [compActual, setCompActual] = useState<any>();
  
    const handleClickOpen = (comp: any) => {
      setState(true);
      setCompActual(comp);
      // console.log(comp);
    };

    const handleClose = (aceptar: boolean) => {
      setState(false);
      console.log(compActual.id);
      console.log(aceptar);

      if(aceptar) {
        axios
      .delete(`http://localhost:8080/estudiante/eliminarComprobante/${compActual.id}`)
      .then(function(response) {
        if (response.data.success === false) {
          toast.error(response.data.error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
        } else {
          toast.success("Comprobante eliminado exitosamente", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
          window.location.reload();
          // history.push("/comprobantes");
        }
      })

      .catch(function(error) {
        console.log(error);
      });
      }
    };
    
    const [comps, setComps] = useState<Array<any>>([]);

    useEffect(() => {
      const fetchCompsData = async () => {
        const data = await fetch(`http://localhost:8080/estudiante/${estudiante.id}/comprobantes`)
          .then((res) => res.json());
        setComps(data.Comps);
        localStorage.setItem("comps", JSON.stringify(data.Comps));
      }
    
      fetchCompsData();
    
    }, [])

    return (
      <div>
          <Dialog
      open={state}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    >
    <DialogTitle id="responsive-dialog-title">
      {"Borrar comprobante"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText>¿Está seguro que desea borrar este comprobante?</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => handleClose(true)} className="btn btn-success">
        Aceptar
      </Button>
      <Button onClick={() => handleClose(false)} className="btn btn-danger">
        Cancelar
      </Button>
    </DialogActions>
    </Dialog>

      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <StyledTableCell>N° de comprobante</StyledTableCell>
            <StyledTableCell align="right">Fecha</StyledTableCell>
            <StyledTableCell align="right">Tipo</StyledTableCell>
            <StyledTableCell align="right">Monto</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comps.map((comp) => (
            <TableRow key={++c}>
              <TableCell>{c}</TableCell>
              <TableCell align="right">{getFecha(comp.fecha)}</TableCell>
              <TableCell align="right">{comp.tipo}</TableCell>
              <TableCell align="right">${comp.monto}</TableCell>
              <TableCell align="center" className='borrar' onClick={() => handleClickOpen(comp)}>Borrar</TableCell>
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
      </div>
    );
}

export default CustomizedTable;