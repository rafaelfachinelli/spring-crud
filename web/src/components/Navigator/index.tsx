import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Nagivator() {
  return(
    <Container>
      <Content>
        <Link className="nav__option" to="/">Dashboard</Link>
        <Link className="nav__option" to="/users/view">Users</Link>
        <Link className="nav__option" to="/users/create">New</Link>
      </Content>
    </Container>
  );
}