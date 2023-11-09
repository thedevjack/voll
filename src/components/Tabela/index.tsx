import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useConsultaData } from "../../hooks/useConsulta";


const CelulaStyle = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro)",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--fonte-principal)",
  }
}))


function Tabela() {
  const { data, isError } = useConsultaData();

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-aria-label="tabela-custom">
          <TableHead>
            <TableRow>
              <CelulaStyle>Data</CelulaStyle>
              <CelulaStyle>Horário</CelulaStyle>
              <CelulaStyle>Profissional</CelulaStyle>
              <CelulaStyle>Especialidade</CelulaStyle>
              <CelulaStyle>Paciente</CelulaStyle>
              <CelulaStyle>Modalidade</CelulaStyle>
            </TableRow>
          </TableHead>

          <TableBody>
            {data?.map((values) => {
              return (
                <TableRow>
                  <CelulaStyle component="th" scope="row">
                    {new Date(values.data).toLocaleDateString()}
                  </CelulaStyle>
                  <CelulaStyle>{values.horario}</CelulaStyle>
                  <CelulaStyle>{values.profissional[0].nome}</CelulaStyle>
                  <CelulaStyle>{values.profissional[0].especialidade}</CelulaStyle>
                  <CelulaStyle>{values.paciente}</CelulaStyle>
                  <CelulaStyle>{values.modalidade}</CelulaStyle>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tabela;
