import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Navigator from '../../components/Navigator';
import Button from '../../components/Button';
import UserCard from '../../components/UserCard';

import User from '../../interfaces/User';

import { Container, Content } from './styles';

export default function ViewUsers() {

  const history = useHistory();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    findUsers();
  });

  async function findUsers() {
    const response = await api.get("/view");
    setUsers(response.data);
  }

  return (
    <Container>
      <Navigator />
      <Content>
        <div className="users__title">
          <h1>Users</h1>
        </div>
        {users.map((user: User) => {
          return <UserCard key={user.id} user={user}/>
        })}
      </Content>
    </Container>
  );
}
