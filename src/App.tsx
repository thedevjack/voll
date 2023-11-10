import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import Titulo from "./components/Titulo";
import Tabela from "./components/Tabela";
import Grafico from "./components/Grafico";
import { useConsultaData } from "./hooks/useConsulta";
import { useProfissionalData } from "./hooks/useProfissional";
import Avaliacao from "./components/Avaliacao";
import Subtitulo from "./components/Subtitulo";
import Botao from "./components/Botao";

function App() {
  const { data: consultas } = useConsultaData();
  const { data: profissionais } = useProfissionalData();

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela />
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico profissionais={profissionais} consultas={consultas} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais={profissionais}/>
      </Container >
      <Rodape />
    </>
  );
}

export default App;
