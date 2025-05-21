import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const Heading = styled.div`
  margin-top: 16.5vh;
  text-align: center;

  > h1 {
    font-family: 500;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #393c41;
  }

  > h2 {
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 1.2rem;
    color: #393c41;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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