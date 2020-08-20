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
          <Logo />
          <ButtonContainer>
            <ButtonHeader as={Link} to="/contato">
              Contato
            </ButtonHeader>
            <ButtonHeader as={Link} to="/sobre">
              Sobre
            </ButtonHeader>
          </ButtonContainer>
        </Header>
      </Container>
    </HeaderContainer>
  );
}

export default header;
