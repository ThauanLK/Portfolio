import React from "react";
import { Link } from "react-router-dom";
import "./components/index";
import {
  ButtonHeader,
  ButtonContainer,
  Container,
  Header,
  Logo,
  HeaderContainer,
} from "./components/index";

function header() {
  return (
    <HeaderContainer>
      <Container>
        <Header>
          <Logo as={Link} to="/" />
          <ButtonContainer>
            <ButtonHeader as={Link} to="/sobre">
              Sobre
            </ButtonHeader>
            <ButtonHeader as={Link} to="/contato">
              Contato
            </ButtonHeader>
          </ButtonContainer>
        </Header>
      </Container>
    </HeaderContainer>
  );
}

export default header;
