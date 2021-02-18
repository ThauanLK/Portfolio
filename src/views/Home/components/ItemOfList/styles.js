import styled from "styled-components";
import "../../../../constants/colors.css";

export const CardContainer = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2%;
`;



export const Card = styled.div`
    display: flex;
    border-radius: 25px;
    background-color: var(--blue2);
    width: 25%;
    margin: 5px 25px;
    height: 250px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    -webkit-box-shadow: -10px 10px 5px 0px var(--shadow);
    -moz-box-shadow: -10px 10px 5px 0px var(--shadow);
    box-shadow: -10px 10px 5px 0px var(--shadow);
    &:hover{
        Img{
         opacity:0.3; 
         transform:scale(1.2);
         transition:0.2s;
     }
     TextHover{
         opacity:1;
     }
    }
`;

export const TextHover = styled.p`
    transition: .5s ease;
    opacity: 0;
    /* position: absolute; */
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%); */
    text-align: center;
`;

export const TitleRepo = styled.p`
`;

export const  ImgRepo = styled.img`
    content:fill;
  
`