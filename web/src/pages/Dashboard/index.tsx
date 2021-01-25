import { Link } from 'react-router-dom';

import Navigator from '../../components/Navigator';

import { Container, Content } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Navigator />
      <Content>
        <div className="dashboard__title">
          <h1 >Dashboard</h1>
        </div>
        <main className="dashboard__description">
          <p className="description">
            Sistema para gerenciamento de dados através de API, com as mais 
            recentes tecnologias de 2021, front-end com React, back-end com
            Spring Boot e banco de dados MySQL.
          </p>
          <section className="dashboard__options">
            <Link className="option" to="/users/view">Users</Link>
          </section>
        </main>
      </Content>
    </Container>
  );
}