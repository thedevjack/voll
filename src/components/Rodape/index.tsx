import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import google from "./assets/google.png";
import whatsapp from "./assets/whatsapp.png";
import styled from "styled-components";

const RodapeStyle = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;
const ListaStyle = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`;

const ItemStyle = styled.li`
  list-style-type: none;
`;

function Rodape() {
  return (
    <RodapeStyle>
      <ListaStyle>
        <ItemStyle>
          <a href="#">
            <img src={facebook} alt="Logo Facebook" />
          </a>
        </ItemStyle>

        <ItemStyle>
          <a href="#">
            <img src={instagram} alt="Logo Facebook" />
          </a>
        </ItemStyle>
        <ItemStyle>
          <a href="#">
            <img src={google} alt="Logo Facebook" />
          </a>
        </ItemStyle>
        <ItemStyle>
          <a href="#">
            <img src={whatsapp} alt="Logo Facebook" />
          </a>
        </ItemStyle>
      </ListaStyle>
      <p>2023 Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
    </RodapeStyle>
  );
}

export default Rodape;
