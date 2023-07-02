import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { format } from 'date-fns';

interface Estudiante {
  id: number;
  id_usuario: number;
  rut: string;
  programa: string;
  carrera: string;
}

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
}

interface Comprobante {
  id: number;
  fecha: string;
  tipo: string;
  monto: number;
}

function Row(props: { row: Estudiante; usuarios: Usuario[] }) {
  const { row, usuarios } = props;
  const [open, setOpen] = React.useState(false);
  const [comps, setComps] = useState<Comprobante[]>([]);
  const [user, setUser] = useState<Usuario | undefined>(undefined);

  useEffect(() => {
    const fetchCompsData = async () => {
      const data = await fetch(`http://localhost:8080/comprobantes/estudiante/${row.id}`)
        .then((res) => res.json());
      setComps(data.Comprobantes);
      localStorage.setItem("comps", JSON.stringify(data.Comprobantes));
      console.log(data.Comprobantes);
    }
    
    fetchCompsData();
  }, [row.id]);

  useEffect(() => {
    const user = usuarios.find((usuario) => usuario.id === row.id_usuario);
    setUser(user);
  }, [row.id_usuario, usuarios]);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{user ? `${user.nombre} ${user.apellido}` : '-'}</TableCell>
        <TableCell align="right">{row.rut}</TableCell>
        <TableCell align="right">{row.programa}</TableCell>
        <TableCell align="right">{row.carrera}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Comprobantes
              </Typography>
              <Table size="small" aria-label="comprobantes">
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell align="right">Monto</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comps.map((comp) => (
                    <TableRow key={comp.id}>
                      <TableCell component="th" scope="row">
                        {format(new Date(comp.fecha), 'dd/MM/yyyy')}
                      </TableCell>
                      <TableCell>{comp.tipo}</TableCell>
                      <TableCell align="right">{comp.monto}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [students, setStudents] = useState<Estudiante[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    const fetchStudentsData = async () => {
      const estudiantesData = await fetch('http://localhost:8080/estudiantes').then((res) => res.json());
      const usuariosData = await fetch('http://localhost:8080/user').then((res) => res.json());

      const estudiantes = estudiantesData.Estudiantes;
      const usuarios = usuariosData.Usuarios;

      const estudiantesUsuarios = usuarios.filter((usuario: { id: any; }) => {
        return estudiantes.some((estudiante: { id_usuario: any; }) => estudiante.id_usuario === usuario.id);
      });

      setStudents(estudiantes);
      setUsuarios(estudiantesUsuarios);
    };

    fetchStudentsData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID Estudiante</TableCell>
            <TableCell>Nombre y Apellido</TableCell>
            <TableCell align="right">Rut</TableCell>
            <TableCell align="right">Programa</TableCell>
            <TableCell align="right">Carrera</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <Row key={student.id} row={student} usuarios={usuarios} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
