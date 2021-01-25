import React, { useState, FormEvent, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';

import Navigator from '../../components/Navigator';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

export default function UpdateUser() {

  const history = useHistory();
  let { id } = useParams<Record<string, string | undefined>>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleUpdateUser(e: FormEvent) {
    e.preventDefault();

    api.put(`/update/${id}`, {
      name,
      email,
      phone
    }).then(() => {
      alert("User updated successfully!");

      history.push("/users/view");
    }).catch(() => {
      alert("Sorry, server error :(");
    });
  }

  useEffect(() => {
    api.get(`/view/${id}`)
    .then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setPhone(response.data.phone);
    })
    .catch(() => {
      alert("Sorry, server error :(");
    });
  }, []);

  return (
    <Container>
      <Navigator />
      <Content>
        <h1 className="update__title">Update User</h1>
        <Input
          label="Name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <Input
          label="Phone"
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => { setPhone(e.target.value) }}
        />

        <div className="update__actions">
          <Button className="cancel__button" onClick={() => {history.push('/users/view')} }>Cancel</Button>
          <Button className="confirm__button" onClick={handleUpdateUser}>Save</Button>
        </div>
      </Content>
    </Container>
  );
}