import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import User from '../../interfaces/User';
import Button from '../Button';

import { Container, Content } from './styles';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({user}) => {

  const history = useHistory();
  
  function handleDeleteUser() {
    if (window.confirm("Are you sure?")) {
      api.delete(`/delete/${user.id}`);
    }
  }

  return (
    <Container className="user__card">
      <Content>
        <section className="user__info">
          <p className="user__id">#{user.id}</p>
          <p className="user__name">{user.name}</p>
          <p className="user__email">{user.email}</p>
          <p className="user__phone">{user.phone}</p>
        </section>
        <section className="user__actions">
          <Button
            className="ok__button"
            onClick={() => { history.push(`/users/update/${user.id}`) }}
          >
            Update
          </Button>
          <Button className="cancel__button" onClick={handleDeleteUser}>Delete</Button>
        </section>
      </Content>
    </Container>
  );
}

export default UserCard;