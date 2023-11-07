import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import Titulo from "./components/Titulo";
import Tabela from "./components/Tabela";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Cabecalho />
        <Container>
          <Titulo>Área Administrativa</Titulo>
          <Tabela />
        </Container>
        <Rodape />
      </QueryClientProvider>
    </>
  );
}

export default App;
