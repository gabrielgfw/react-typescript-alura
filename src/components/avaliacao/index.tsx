import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./card";
import Botao from "../botao";

const SecaoCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;


function Avaliacao({ profissionais } : { profissionais: IProfissional[] | null }) {
  return (
    <ContainerCard>
      <SecaoCard>
        { profissionais?.map(profissional => {
            return <Card profissional={ profissional }/>
          }) 
        }
      </SecaoCard>
      <Botao>Ver mais</Botao>
    </ContainerCard>
  )
}

export default Avaliacao;
