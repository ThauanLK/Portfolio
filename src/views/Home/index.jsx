import React, {useEffect, useState} from "react";
import { Container,
  Developer, Role, HeroMark, HeroActions,
  ApresentationText,
  Text,
  Section,
  ContentContainer,
  Title,
  Button,
  ButtonContainer,
  Divider,
  Li,
  Subtitle, Git, Link, ItalicText, BoldText } from "./styles";
import Layout from "./components/Layout/index";
import {getRepo} from "../../services/index-git";
import Curriculo from "../../documents/CurriculoThauan.pdf"
import {EachLine} from "./components/LineProgram/index";
import {AboutMe,Academics,XpAnterior} from "../../data/profile";
import logo from "../../assets/logo_tco.svg";
import ListOfCards from "./components/ItemOfList/index";

function Home() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const controller = new AbortController();
    getRepo({ signal: controller.signal })
      .then((data) => { setRepos(data); setStatus('success'); })
      .catch(() => { if (!controller.signal.aborted) setStatus('error'); });
    return () => controller.abort();
  }, []);
  return (
    <Layout>
      <ContentContainer>
        <Section id="apresentacao">
          <div>
            <ApresentationText>Desenvolvimento & qualidade de software</ApresentationText>
            <Developer>Thauan Corrêa</Developer>
            <Role>Analista de sistemas</Role>
            <ApresentationText>
              Experiência em desenvolvimento front-end e automação de testes.
              Conheça os projetos e as experiências que fazem parte da minha trajetória.
            </ApresentationText>
            <HeroActions>
              <Button href="#projetos">Explorar projetos</Button>
              <Link href={Curriculo} download="Curriculo-Thauan.pdf">Baixar currículo</Link>
            </HeroActions>
          </div>
          <HeroMark aria-hidden="true"><img src={logo} alt="" /></HeroMark>
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
          <Subtitle>Formação acadêmica</Subtitle>
          <ul>
          {Academics.map((academic) => (
            <Li key={academic.title}>
              <BoldText>{academic.title}</BoldText>
              <ItalicText>{academic.year}</ItalicText>
              <Text>{academic.grade}</Text>
            </Li>
          ))}
          </ul>
          <Subtitle>Experiência profissional</Subtitle>
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
            <Button as="a" href={Curriculo} download="Curriculo-Thauan.pdf">Baixar currículo</Button>
          </ButtonContainer>
        </Section>
        <Divider/>
        <Section id="projetos">
          <Title>Meus projetos</Title>
          {status === 'loading' && <Text role="status">Carregando projetos…</Text>}
          {status === 'error' && <Text role="alert">Não foi possível carregar os projetos. Você pode acessá-los pelo GitHub abaixo.</Text>}
          {status === 'success' && repos.length === 0 && <Text>Nenhum projeto público encontrado.</Text>}
          {status === 'success' && <ListOfCards repos={repos} />}
          <Git>
            Para ver a lista completa acesse:{" "}
            <Link href="https://github.com/ThauanLK" target="_blank" rel="noopener noreferrer"> https://github.com/ThauanLK</Link>
          </Git>
        </Section>
        <Divider/>
        <Section id="contato">
          <Title>Entre em contato</Title>
          <Text>Entre em contato pelo <Link href="https://www.linkedin.com/in/thauan-corr%C3%AAa-de-oliveira-525334193/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>.</Text>
        </Section>
      </ContentContainer>
    </Layout>
  );
}

export default Home;
