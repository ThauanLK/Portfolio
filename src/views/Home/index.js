import React, {useEffect, useState} from "react";
import { Container,
  Developer ,
  Text,
  Section,
  ContentContainer,
  Title, 
  Button, 
  ButtonContainer, 
  Subtitle, Git, Link, ItalicText, BoldText } from "./styles";
import Layout from "./components/Layout/index";
import {getRepo} from "../../services/index-git";
import {ContactWithMe} from "../../services/index-email";
import FormField from "./components/FormField/index";
import useForm from "../../hooks/useForm/index";
import Curriculo from "../../documents/CurriculoThauan.pdf"
import {EachLine} from "./components/LineProgram/index";
import {AboutMe,Academics,XpAnterior} from "./components/xpAnterior";
import ListOfCards from "./components/ItemOfList/index";

function Home() {
  const [repos, setRepos] = useState([]);
  const { value, onChangeHandler,clearForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    getRepo((response)=>{
      if(response.status >= 200 && response.status <= 299) setRepos(Array.from(response.data))
    })
  },[]);

  console.log("A",repos);

  return (
    <Layout>
      <ContentContainer>
        <Section id="apresentacao">
          <p>Olá <span>😉</span>, me chamo é Thauan Corrêa, e eu sou um</p>
          <Developer>Desenvolvedor Front-End</Developer>
          <p>Depois de conhecer </p>
        </Section>
        <Section id="sobre">
          <Title>Sobre Mim</Title>
          <Container>
            <Text>{AboutMe.text}</Text>
          </Container>
        </Section>
        <Section id="curriculo">
          <Title>Currículo</Title>
          <Subtitle>Formação Academica</Subtitle>
          {Academics.slice(0, Academics.length -1).map((eachAcademic,index)=>(
            <div key={index}>
              <li>
                <BoldText>{eachAcademic.title}</BoldText>
                <ItalicText>{eachAcademic.year}</ItalicText>
                <Text>{eachAcademic.grade}</Text>
              </li>
            </div>
          ))}
           {Academics.slice(Academics.length-1, Academics.length).map((eachAcademic,index)=>(
            <div key={index}>
              <li>
                <BoldText>{eachAcademic.title}</BoldText>
                <ItalicText>{eachAcademic.year}</ItalicText>
                <Text>{eachAcademic.grade}</Text>
              </li>
            </div>
          ))}
          <Subtitle>Experiencia Anterior</Subtitle>
          {XpAnterior.map((eachXp,index)=>(
            <div key={index}>
              <li>
                <BoldText>{eachXp.title}</BoldText>
                <ItalicText>{eachXp.period}</ItalicText>
                <Text>{eachXp.description}</Text>
              </li>
            </div>
          ))}
          <Subtitle>Conhecimentos</Subtitle>
          <EachLine/>
          <ButtonContainer>
            <a href={Curriculo} download="Curriculo-Thauan Corrêa de Oliveira">
            <Button>
              DOWNLOAD
            </Button>
            </a>
          </ButtonContainer>
        </Section>
        <Section id="projetos">
          <Title>Meus projetos</Title>
          {repos === [] ? (<div><p>Carregando...</p></div>) : (<ListOfCards repos={repos}/> ) }
          <Git>
            Para ver a lista completa acesse:{" "}
            <Link href="https://github.com/ThauanLK" target="blank"> https://github.com/ThauanLK</Link>
          </Git>
        </Section>
        <section id="contato">
          <Title>Entre Contato Comigo</Title>
          <form onSubmit={(e)=> {
            e.preventDefault();
            ContactWithMe(value);
            clearForm();
          }}>
              <FormField label={"Nome"} name={"name"} value={value.name} onChange={onChangeHandler}/>
              <FormField label={"Email"} name={"email"} type={"email"} value={value.email} onChange={onChangeHandler}/>
              <FormField label={"Mensagem"} type={"textarea"} name={"message"} value={value.message} onChange={onChangeHandler}/>
              <ButtonContainer>
                <Button>Enviar</Button>
              </ButtonContainer>
          </form>
        </section>
      </ContentContainer>
    </Layout>
  );
}

export default Home;


