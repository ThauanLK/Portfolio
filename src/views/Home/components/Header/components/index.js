import styled from "styled-components";
import "../../../../../constants/colors.css";


export const HeaderContainer = styled.div`
height: 13vh;
-moz-height: 15vh;
background-color: var(--white);
width: 100%;
box-shadow: 0px 4px 5px 0px var(--blue);
position: fixed;
z-index: 5;
`;

export const Container = styled.div`
margin: 0 auto;
width: 1024px;
height: 100%;
`;

export const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
`;

export const Logo = styled.div`
background-color: var(--black);
height: 65px;
border-radius: 50%;
width: 65px;
text-align: center;
`;

export const LinksContainer = styled.div`
width: 40%;
display: flex;
justify-content: space-between;
`;

export const LinkHeader = styled.a`
color: var(--black);
text-decoration: none;
font-family: 'Montserrat', sans-serif;
&:hover{
    transition: 0.2s;
    color: var(--blue);
    font-weight: bold;
}
`;