import styled from "styled-components";

export const Container = styled.div`
  height: 100vh; // Altura de 100% para o componente pai

  scroll-snap-type: y mandatory; // Eixo y pois iremos fazer o efeito scroll de cima para baixo
  overflow-y: scroll;
`;