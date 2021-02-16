import React from "react";
import Header from "../Header/index";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 8%;
`;


function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <Container>
        {props.children}
      </Container>
    </React.Fragment>
  );
}

export default Layout;