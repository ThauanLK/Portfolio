import styled from "styled-components";
import "../../constants/colors.css";


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

export const LinksContainer = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  `;

export const Text = styled.p`
  margin-bottom: 25px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 3% 0;
  font-weight: bold;
  font-size: 1.8em;
  font-family: 'Montserrat', sans-serif;
  `;

export const Button = styled.button`
  background-color: var(--white);
  border-radius: 25px;
  border: solid 2px var(--blue);
  width: 100%;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 9px var(--shadow);
  font-family: 'Montserrat', sans-serif;

  &:hover{
    transition: 0.3s;
    background-color: var(--blue);
    border-color: var(--white);
    color: var(--white);
    font-weight:bold;
  }

  &:active {
  background-color: var(--pressedButton);
  box-shadow: 0 5px var(--pressedShadow);
  transform: translateY(4px);
  }
`;

export const ButtonContainer = styled.div`
  display: block;
  width: 25%;
  margin:5% auto;
`;

