import React from "react";
import Header from "../Header/index";
import styled from "styled-components";
import SocialMedias from "../SocialMedias/index";
export const Container = styled.div`
  padding-top: 8%;
  /* background: linear-gradient(180deg, rgba(250,250,250,1) 32%, rgba(23,148,152,1) 73%); */
  
`;

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {props.children}
      </Container>
      <SocialMedias/>
    </React.Fragment>
  );
}

export default Layout;