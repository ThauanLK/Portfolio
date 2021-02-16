import React from "react";
import "./components/index";
import {
  LinksContainer,
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
          <Logo/>
          <LinksContainer>
            <LinkHeader  href={"#projetos"}>Meus Projetos</LinkHeader>
            <LinkHeader  href={"#curriculo"}>Curriculo</LinkHeader>
            <LinkHeader  href={"#sobre"}>Sobre</LinkHeader>
            <LinkHeader  href={"#contato"}>Contato</LinkHeader>
          </LinksContainer>
        </Header>
      </Container>
    </HeaderContainer>
  );
}

export default header;