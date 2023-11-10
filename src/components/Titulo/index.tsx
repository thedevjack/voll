import avaliacao from "./assets/avaliacao.png";
import grafico from "./assets/grafico.png";
import consulta from "./assets/consulta.png";
import styled from "styled-components";

interface Props {
  imagem?: string;
  children?: React.ReactNode;
}

interface IImagens {
  avaliacao: string;
  grafico: string;
  consulta: string;
}

const SpanStyle = styled.span<Props>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    props.imagem ? `url(${props.imagem})` : "none"};
`;

const TituloStyle = styled.h2`
  color: var(--azul-claro);
`;

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
`;

function Titulo({ imagem, children }: Props) {
  const listaDeImagens: IImagens = {
    avaliacao: avaliacao,
    consulta: consulta,
    grafico: grafico,
  };

  return (
    <ContainerStyle>
      <SpanStyle imagem={listaDeImagens[imagem as keyof IImagens]} />
      <TituloStyle>{children}</TituloStyle>
    </ContainerStyle>
  );
}

export default Titulo;