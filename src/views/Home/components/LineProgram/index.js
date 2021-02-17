import React from "react";
import styled from "styled-components";
import ProgramLanguages from "./ProgramLanguages";
import Rating from '@material-ui/lab/Rating';

const  Principal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const Line = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items:center;
    margin-bottom: 15px;    
`;

const Text = styled.p`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Img = styled.img`
    height: 25px;
    width: 25px;
    align-self: center;
    margin-right: 5%;
`;

const MakeTogether = styled.div`
    display:flex;
    align-items:inherit;
    width: 25%;
    &:hover{
        cursor: pointer;
        img{
            -webkit-transform: scale(1.3);
            -ms-transform: scale(1.3);
            transform: scale(1.3);
            margin-right: 9%;
            transition:0.3;
        } 
        
    }
`;

const Sort = () => {
    ProgramLanguages.sort(function(a, b){return b.level - a.level});
}

export function EachLine() {
    Sort();
    return (
        <React.Fragment>
            <Principal>
            {ProgramLanguages.map((eachLanguage,index) => (
                <Line key={index}>
                    <MakeTogether>
                        <Img src={eachLanguage.image}/>
                        <Text>{eachLanguage.name}</Text>
                    </MakeTogether>
                    <Rating name="half-rating-read" defaultValue={eachLanguage.level} precision={0.5} readOnly />
                </Line>
            ))}
            </Principal>
        </React.Fragment>
    )
} 
