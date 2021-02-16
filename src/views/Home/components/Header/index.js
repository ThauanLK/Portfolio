import React from "react";
import { Link } from "react-router-dom";
import "./components/index";
import {
  ButtonContainer,
  Container,
  Header,
  Logo,
  HeaderContainer,
  LinkHeader
} from "./components/index";

function header() {
  return (
    <HeaderContainer>
      <Container>
        <Header>
          <Logo as={Link} to="#home" />
          <ButtonContainer>
            <LinkHeader  href={"#projetos"}>Meus Projetos</LinkHeader>
            <LinkHeader  href={"#curriculo"}>Curriculo</LinkHeader>
            <LinkHeader  href={"#sobre"}>Sobre</LinkHeader>
            <LinkHeader  href={"#contato"}>Contato</LinkHeader>
          </ButtonContainer>
        </Header>
      </Container>
    </HeaderContainer>
  );
}

export default header;