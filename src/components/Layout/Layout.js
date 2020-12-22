import React from "react";
import Header from "../header/index";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20vh;
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
