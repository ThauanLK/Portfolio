import React from 'react';
import { LinksContainer, Container, Header, Brand, Logo, HeaderContainer, LinkHeader } from './components/index';
import MenuOptions from './menus';
import logo from '../../../../assets/logo_tco.svg';

export default function SiteHeader() {
  return (
    <HeaderContainer>
      <Container>
        <Header>
          <Brand href="#apresentacao" aria-label="Thauan Corrêa — início">
            <Logo src={logo} alt="" width="56" height="56" />
            <span>Thauan Corrêa</span>
          </Brand>
          <LinksContainer aria-label="Navegação principal">
            {MenuOptions.map((option) => (
              <LinkHeader key={option.url} href={option.url}>{option.title}</LinkHeader>
            ))}
          </LinksContainer>
        </Header>
      </Container>
    </HeaderContainer>
  );
}
