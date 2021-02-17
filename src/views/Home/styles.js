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
  margin-bottom: 5px;
  line-height: 1em;
  font-family: 'Montserrat', sans-serif;
`;


export const Section = styled.section`
  width: 100%;
  height: auto;
  border-bottom: solid 2px var(--shadow);
  margin-bottom: 2%;
  padding:2% 0;
`;

export const Git = styled.p`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const Link = styled.a`
  
`
export const Divider = styled.div`
  background-color: var(--shadow);
  width: 100%;
  height:2px;
  margin: 2% 0;
`;


export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 1.8em;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 3%;
`;

export const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 1.2em;
  font-family: 'Montserrat', sans-serif;
  margin: 2% 0;
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

export const BoldText = styled.h3`
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  margin-bottom:1%;
`;

export const ItalicText = styled.p`
  font-style:italic;
  font-family: 'Montserrat', sans-serif;
  margin-bottom:0.5%;
`;

export const Developer = styled.h1`
  font-family:'Montserrat', sans-serif;
  font-size: 4em;
  font-weight: 600;
  /* animation: changeColor linear 2s infinite alternate;
  @keyframes changeColor {
  from {color: var(--blue);}
  to {color: var(--blue2);}
} */

background: linear-gradient(to right, #000 20%, #bada55 30%, #bada44 70%, #000 80%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 200% auto;
  animation: textShine 7s ease-in-out infinite alternate;
}

@keyframes textShine {
  to {
    background-position: 200%;
  }
}
`;
