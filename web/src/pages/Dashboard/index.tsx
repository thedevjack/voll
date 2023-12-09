import Titulo from "../../components/Titulo";
import Avaliacao from "../../components/Avaliacao";
import Botao from "../../components/Botao";
import Grafico from "../../components/Grafico";
import Subtitulo from "../../components/Subtitulo";
import Tabela from "../../components/Tabela";
import { useConsultaData } from "../../hooks/useConsulta";
import { useProfissionalData } from "../../hooks/useProfissional";
import Container from "../../components/Container";

export default function Dashboard() {
  const { data: consultas, isError } = useConsultaData();
  const { data: profissionais } = useProfissionalData();

  if (isError) {
    console.log("Ocorreu um erro na requisição");
  }

  return (
    <Container>
      <Titulo>Área Administrativa</Titulo>
      <Botao>Cadastrar especialista</Botao>
      <Titulo imagem="consulta">Consultas do Dia</Titulo>
      <Tabela />
      <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
      <Subtitulo>Dezembro/22</Subtitulo>
      <Grafico profissionais={profissionais} consultas={consultas} />
      <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
      <Avaliacao profissionais={profissionais} />
    </Container>
  );
}
