import React from "react";
import styled from "styled-components";
import ProgramLanguages from "./ProgramLanguages";

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

const Star = styled.div`
  position: relative;
    
    display: inline-block;
    width: 0;
    height: 0;
    
    margin-left: .9em;
    margin-right: .9em;
    margin-bottom: 1.2em;
    
    border-right:  .3em solid transparent;
    border-bottom: .7em  solid #FC0;
    border-left:   .3em solid transparent;
  
    /* Controlls the size of the stars. */
    font-size: 24px;
    
    &:before, &:after {
      content: '';
      
      display: block;
      width: 0;
      height: 0;
      
      position: absolute;
      top: .6em;
      left: -1em;
    
      border-right:  1em solid transparent;
      border-bottom: .7em  solid #FC0;
      border-left:   1em solid transparent;
    
      transform: rotate(-35deg);
    }
    
    &:after {  
      transform: rotate(35deg);
    }
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
        img{
            -webkit-transform: scale(1.3);
            -ms-transform: scale(1.3);
            transform: scale(1.3);
            margin-right: 9%;
            transition:0.3;
        } 
        
    }
`;

export function EachLine() {
    return (
        <React.Fragment>
            <Principal>
            {ProgramLanguages.map((eachLanguage,index) => (
                <Line key={index}>
                    <MakeTogether>
                        <Img src={eachLanguage.image}/>
                        <Text>{eachLanguage.name}</Text>
                    </MakeTogether>
                    <Line>
                    {[...Array(eachLanguage.level)].map(()=> (
                        <Text key={index}>☆</Text>
                        ))}
                    </Line>
                </Line>
            ))}
            </Principal>
        </React.Fragment>
    )
} 
