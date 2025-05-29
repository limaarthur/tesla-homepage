import { useWrapperScroll } from '../Model/useWrapperScroll';
import { useTransform } from 'framer-motion';

import logoImg from '../../../public/images/logo.svg'
import hamburguerMenu from '../../../public/images/hamburger-menu.svg'

import { Container, Header, Logo, Menu, Footer } from './styles'

export function UniqueOverlay() {
  const { scrollYProgress } = useWrapperScroll() 

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]) // Opacidade ao fazer o scroll 0.9 = 90% e 1 = 100%
  
  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Tesla" />
        <Menu src={hamburguerMenu} alt="Menu" />
      </Header>
      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Tesla</a>
          </li>
          <li>
            <a href="#">made</a>
          </li>
          <li>
            <a href="#">by ignite</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}
