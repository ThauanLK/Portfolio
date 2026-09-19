import React from 'react';
import { styled } from 'styled-components';
import Header from '../Header/index';
import SocialMedias from '../SocialMedias/index';

const Main = styled.main`padding-bottom: 112px;`;

export default function Layout({ children }) {
  return <>
    <Header />
    <Main>{children}</Main>
    <SocialMedias />
  </>;
}
