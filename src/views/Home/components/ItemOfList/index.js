import React from 'react';
import {CardContainer,Card,TitleRepo,ImgRepo,TextHover} from "./styles";

const ListCards = (vector) => {
  return (
    <CardContainer>
    {vector.repos.map((eachRepo,index)=>(
      <Card key={index}>
        <ImgRepo src="https://img.icons8.com/wired/64/000000/no-image.png"/>
        <TextHover>+</TextHover>
        <TitleRepo>Nome do Projeto:{eachRepo.name}</TitleRepo>
      </Card>
    ))} 
  </CardContainer>
  )
}

export default ListCards
