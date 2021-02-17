import styled from "styled-components";

export const Link = styled.a `

`;

export const Main = styled.div`
    position:fixed;
    right:0px;
    bottom:0px;
    height:40px;
    width:12%;
    z-index: 5;
    border-radius: 25px 25px 0 0; 
    padding: 1%;
`;

export const Img = styled.img`
    height:50px;
    width:50px;
    opacity: 0.1;
    &:hover{
        transition: 0.5;
        opacity: 1;
        cursor: pointer;
    }
`;

export const Positing = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

