import React, { useState, useEffect } from 'react'
import { Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import axios from 'axios';
import { ToastContainer, toast, Flip } from "react-toastify";

function getFecha(fecha : string) {
    var info = fecha.split('-');
    return `${info[2].substring(0,2)}/${info[1]}/${info[0]}`;
  }
  
function getTotal(comps: any[]) {
    let total = 0;
    comps.forEach(comp => total += comp.monto);
    return `$${total}`;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

interface Comprobante {
    tipo: string;
    fecha: string;
    monto: number;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  id: keyof Comprobante;
  label: string;
}

const headCells: HeadCell[] = [
  { id: 'fecha', label: 'Fecha' },
  { id: 'tipo', label: 'Tipo' },
  { id: 'monto', label: 'Monto' },
];

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Comprobante) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof Comprobante) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell
            key={"Comprobante"}
            align={'center'}
          >
            Comprobantes
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'right'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell
        key="options"
        ></TableCell>
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    tableLeft: {
        width: 250,
      },
    icon_delete: {
      marginRight: 15,
      cursor: "pointer",
      "&:hover": {
        fill: "red",
      },
    },
    icon_edit: {
      marginRight: 15,
      cursor: "pointer",
      "&:hover": {
        fill: "green",
      },
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }),
);

const EnhancedTable = () => {
    const classes = useStyles();

    const estudiante = localStorage.getItem("est") !== "undefined"
      ? JSON.parse(localStorage.getItem("est")!)
      : localStorage.clear();

    const [state, setState] = useState(false);
    const [compActual, setCompActual] = useState<any>();
    const [comps, setComps] = useState<Array<any>>([]);

    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof Comprobante>('fecha');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleEditOpen = (comp : any) => {
      setCompActual(comp);
      console.log(comp);
      // Falta esto xd
    };

    const handleDeleteOpen = (comp: any) => {
        setState(true);
        setCompActual(comp);
      };
  
    const handleDeleteClose = (aceptar: boolean) => {
      setState(false);

      if(aceptar) {
        axios
      .delete(`http://localhost:8080/comprobantes/${compActual.id}`)
      .then(function(response) {
          window.location.reload();
      })

      .catch(function(error) {
        console.log(error);
      });
      }
    };

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Comprobante) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, comps.length - page * rowsPerPage);

  useEffect(() => {
    const fetchCompsData = async () => {
      const data = await fetch(`http://localhost:8080/comprobantes/estudiante/${estudiante.id}`)
        .then((res) => res.json());
      setComps(data.Comprobantes);
      localStorage.setItem("comps", JSON.stringify(data.Comprobantes));
    }
  
    fetchCompsData();
  
  }, []);

  return (
    <div className={classes.root}>

      <Dialog
        open={state}
        onClose={() => handleDeleteClose(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Borrar comprobante"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>¿Está seguro que desea borrar este comprobante?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDeleteClose(true)} className="btn btn-success">
              Aceptar
          </Button>
          <Button onClick={() => handleDeleteClose(false)} className="btn btn-danger">
              Cancelar
          </Button>
        </DialogActions>
      </Dialog>

      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(comps, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((comp, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      key={index}
                    >
                      <TableCell align="center">Comprobante {index+1}</TableCell>
                      <TableCell align="right">{typeof comp.fecha === "string" ? getFecha(comp.fecha) : comp.fecha}</TableCell>
                      <TableCell align="right">{comp.tipo}</TableCell>
                      <TableCell align="right">${comp.monto}</TableCell>
                      <TableCell 
                        align="center" 
                        component="th" 
                        id={labelId} 
                        scope="row"
                        className={classes.tableLeft}
                        >
                          <DeleteIcon className={classes.icon_delete}
                            onClick={() => handleDeleteOpen(comp)}
                          //   checked={isItemSelected}
                          //   inputProps={{ 'aria-labelledby': labelId }}
                          />
                          <CreateIcon className={classes.icon_edit}
                            onClick={() => handleEditOpen(comp)}
                          />
                      </TableCell>
                      
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell colSpan={2} />
                  <TableCell align="right"><b>Total pagado</b></TableCell>
                  <TableCell align="right"><b>{getTotal(comps)}</b></TableCell>
                </TableRow>
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={comps.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default EnhancedTable;