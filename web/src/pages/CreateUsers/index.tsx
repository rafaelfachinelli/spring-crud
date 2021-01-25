import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Navigator from '../../components/Navigator';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

export default function CreateUsers() {

  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleCreateUser() {
    api.post("/create", {
      name,
      email,
      phone
    }).then(() => {
      alert("User saved successfully!");

      history.push("/users/view");
    }).catch(() => {
      alert("Sorry, server error :(");
    });
  }

  return (
    <Container>
      <Navigator />
      <Content>
        <h1 className="create__title">New User</h1>
        <Input
          label="Name"
          id="name"
          type="text"
          onChange={(e) => { setName(e.target.value) }}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <Input
          label="Phone"
          id="phone"
          type="text"
          onChange={(e) => { setPhone(e.target.value) }}
        />

        <div className="create__actions">
          <Button className="cancel__button" onClick={() => {history.push('/users/view')} }>Cancel</Button>
          <Button className="confirm__button" onClick={handleCreateUser}>Save</Button>
        </div>
      </Content>
    </Container>
  );
}