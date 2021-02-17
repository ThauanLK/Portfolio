import React, {useEffect, useState} from "react";
import { Container, Text, ContentContainer, Title, Button, ButtonContainer, Subtitle, Git, Link, Divider } from "./styles";
import Layout from "./components/Layout/index";
import {getRepo} from "../../services/index-git";
import {ContactWithMe} from "../../services/index-email";
import FormField from "./components/FormField/index";
import useForm from "../../hooks/useForm/index";
import Curriculo from "../../documents/CurriculoThauan.pdf"
import {EachLine} from "./components/LineProgram/index";
import {AboutMe,Academics,XpAnterior} from "./components/xpAnterior";

function Home() {
  const [repos, setRepos] = useState([]);
  const { value, onChangeHandler,clearForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setRepos(getRepo());
  },[]);

  console.log(Academics.slice(0, Academics.length -1));

  return (
    <Layout>
      <ContentContainer>
        <section id="apresentacao">

        </section>
        <section id="sobre">
          <Title>Sobre Mim</Title>
          <Container>
            <Text>{AboutMe.text}</Text>
          </Container>
        </section>
        <section id="curriculo">
          <Title>Currículo</Title>
          <Subtitle>Formação Academica</Subtitle>
          {Academics.slice(0, Academics.length -1).map((eachAcademic,index)=>(
            <div key={index}>
              <li>
                <Text>{eachAcademic.title}</Text>
                <Text>{eachAcademic.grade}</Text>
                <Text>{eachAcademic.year}</Text>
                <Divider/>
              </li>
            </div>
          ))}
           {Academics.slice(Academics.length-1, Academics.length).map((eachAcademic,index)=>(
            <div key={index}>
              <li>
                <Text>{eachAcademic.title}</Text>
                <Text>{eachAcademic.grade}</Text>
                <Text>{eachAcademic.year}</Text>
              </li>
            </div>
          ))}
          <Subtitle>Experiencia Anterior</Subtitle>
          {XpAnterior.map((eachXp,index)=>(
            <div key={index}>
              <Text>{eachXp.title}</Text>
              <Text>{eachXp.period}</Text>
              <Text>{eachXp.description}</Text>
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
        </section>
        <section id="projetos">
          <Title>Meus repositórios</Title>
          <Git>
            Para ver a lista completa acesse:{" "}
            <Link href="https://github.com/ThauanLK" target="blank"> https://github.com/ThauanLK</Link>
          </Git>
        </section>
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
