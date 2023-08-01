import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import {
  Background,
  Card,
  LoginField,
  Button,
  CenteredContainer,
  LoginTitle,
  Links,
} from './Style';

export default function index() {
  return (
    <Background>
      <CenteredContainer>
        <Card>
          <LoginTitle>Login</LoginTitle>
          <LoginField type="text" placeholder="Email" />
          <LoginField type="password" placeholder="Password" />
          <Button>Login</Button>
          <span>
            New here?
            <Link to="/register">
              <Links> Register </Links>
            </Link>
          </span>
        </Card>
      </CenteredContainer>
    </Background>
  );
}
