import styled from "styled-components";

export const ButtonHeader = styled.button`
  background-color: white;
  height: 36px;
  border: none;
  width: 165px;
  border-radius: 25px;
  font-size: 1em;
  text-decoration: none;
  text-align: center;
  color: black;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-between;
`;

export const Logo = styled.div`
  background-color: white;
  height: 65px;
  border-radius: 50%;
  width: 65px;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 1024px;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  height: 15vh;
  background-color: darkgrey;
  width: 100%;
`;
