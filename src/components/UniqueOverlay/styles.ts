import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  position: sticky; // Permite fazer o scroll pois o fixed não permite isso
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.2rem;
  min-height: 3.2rem;
`;

export const Logo = styled.img`
  height: 1.2rem;
  cursor: pointer;
`;

export const Menu = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;

  padding-right: 0.3rem;
`;

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul { // Mobile first ao diminuir a tela ficará em coluna
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;
      font-size: 1rem;

      & + li {
        margin-top: 0.6rem 0 0;
      }

      a {
        text-decoration: none;
        color: #393c41;

        &:hover {
          color: #000000;
        }
      }
    }
  }

  margin-bottom: 1.8rem;

  @media (min-width: 37.5rem) { // Em telas com 600px acima o margin será aplicado
    margin-bottom: 2.3rem;
  }

  ul {
    flex-direction: row;

    li + li {
    margin: 0 0 0 1.8rem;
    }
  }
`;

