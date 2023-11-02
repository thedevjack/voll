import styled from "styled-components";
import logo from "./assets/logo.png";
import perfil from "./assets/perfil.png";

const CabecalhoStyle = styled.header`
  display: flex;
  align-itens: center;
  justify-content: space-between;
  padding: 2em 4em;
`;

const Container = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-around;
  flex-grow: 0.1;
`;

const LinkStyle = styled.a`
  color: var(--azul-escuro);
  font-weight: 700;
`;

 function Cabecalho() {
  return (
    <CabecalhoStyle>
      <img src={logo} alt="Logo da empresa Voll" />
      <Container>
        <img src={perfil} alt="Avatar de perfil" />
        <LinkStyle href="#">Sair</LinkStyle>
      </Container>
    </CabecalhoStyle>
  );
}

export default Cabecalho;
