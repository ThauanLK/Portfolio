import React, {useEffect, useState} from "react";
import { Container,
  Developer ,
  ApresentationText,
  Text,
  Section,
  ContentContainer,
  Title, 
  Button, 
  ButtonContainer,
  Form, 
  Divider,
  FormContainer,
  Li,
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

  return (
    <Layout>
      <ContentContainer>
        <Section id="apresentacao">
          <ApresentationText>
            Olá <span>😉</span>, me chamo Thauan Corrêa,
          </ApresentationText>
          <Developer>Desenvolvedor Front-End</Developer>
          <ApresentationText>
            Não sei o que escrever 
            </ApresentationText>
        </Section>
        <Divider/>
        <Section id="sobre">
          <Title>Sobre Mim</Title>
          <Container>
            <Text>{AboutMe.text}</Text>
          </Container>
        </Section>
        <Divider/>
        <Section id="curriculo">
          <Title>Currículo</Title>
          <Subtitle>Formação Academica</Subtitle>
          <ul>
          {Academics.slice(0, Academics.length -1).map((eachAcademic,index)=>(
            <Li key={index}>
              <BoldText>{eachAcademic.title}</BoldText>
              <ItalicText>{eachAcademic.year}</ItalicText>
              <Text>{eachAcademic.grade}</Text>
            </Li>
          ))}
          </ul>
            <ul>
           {Academics.slice(Academics.length-1, Academics.length).map((eachAcademic,index)=>(
              <Li key={index}>
                <BoldText>{eachAcademic.title}</BoldText>
                <ItalicText>{eachAcademic.year}</ItalicText>
                <Text>{eachAcademic.grade}</Text>
              </Li>
          ))}
          </ul>
          <Subtitle>Experiencia Anterior</Subtitle>
          <ul>
          {XpAnterior.map((eachXp,index)=>(
                <Li  key={index}>
                  <BoldText>{eachXp.title}</BoldText>
                  <ItalicText>{eachXp.period}</ItalicText>
                  <Text>{eachXp.description}</Text>
                </Li>
          ))}
          </ul>
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
        <Divider/>
        <Section id="projetos">
          <Title>Meus projetos</Title>
          {repos === [] ? (<div><p>Carregando...</p></div>) : (<ListOfCards repos={repos}/> ) }
          <Git>
            Para ver a lista completa acesse:{" "}
            <Link href="https://github.com/ThauanLK" target="blank"> https://github.com/ThauanLK</Link>
          </Git>
        </Section>
        <Divider/>
        <Section id="contato">
          <Title>Entre Contato Comigo</Title>
            <FormContainer>  
            <Form onSubmit={(e)=> {
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
            </Form>
          </FormContainer>
        </Section>
      </ContentContainer>
    </Layout>
  );
}

export default Home;


