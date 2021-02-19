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
import MenuOptions from "./menus";

function header() {
  return (
    <HeaderContainer>
      <Container>
        <Header>
          <a href="#">
            <Logo/>
          </a>
          <LinksContainer>
          {MenuOptions.map((eachOption,index) => (
            <LinkHeader  key={index} href={eachOption.url}>{eachOption.title}</LinkHeader>
          ))}
          </LinksContainer>
        </Header>
      </Container>
    </HeaderContainer>
  );
}

export default header;