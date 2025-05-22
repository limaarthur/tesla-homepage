import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh; // Faz o container ocupar 100% da tela disponível
`;

export const Heading = styled.div`
  margin-top: 16.5vh;
  text-align: center;

  > h1 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #e8e6e3;
  }

  > h2 {
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.2rem;
    color: #e8e6e3;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 8rem;

  > button {
    background: #1a1720;
    color: #FFFFFF;
    opacity: 0.8;

    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 0.5rem 2.5rem;
    border-radius: 20px;
    border: none;
    outline: 0;
    cursor: pointer;

    &.white {
      background: #FFFFFF;
      color: #1a1720;
      opacity: 0.65;
    }

    & + button {
      margin: 0.6rem 0 0;
    }
  }

  @media (min-width: 37.5rem) {
    flex-direction: row;
    margin-bottom: 5.6rem;

    > button + button {
      margin: 0 0 0 0.6rem;
    }
  }
`;