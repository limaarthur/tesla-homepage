import logoImg from '../../../public/images/logo.svg'
import hamburguerMenu from '../../../public/images/hamburger-menu.svg'

import { Container, Header, Footer } from './styles'

export function UniqueOverlay() {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Tesla" />
        <img src={hamburguerMenu} alt="Menu" />
      </Header>
      <Footer>
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
