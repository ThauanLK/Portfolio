import React, {useEffect, useState} from "react";
import { Container,
  Developer, Role, HeroMark, HeroActions, DownloadLink,
  ApresentationText,
  Text,
  Section,
  ContentContainer,
  Title,
  Button,
  Divider,
  Subtitle, Git, Link } from "./styles";
import Layout from "./components/Layout/index";
import {getRepo} from "../../services/index-git";
import Curriculo from "../../documents/CurriculoThauan.pdf"
import {EachLine} from "./components/LineProgram/index";
import {AboutMe} from "../../data/profile";
import logo from "../../assets/logo-apresentacao.png";
import Contact from "./components/Contact/index";
import ResumeTimeline from "./components/ResumeTimeline/index";
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
            <ApresentationText>Desenvolvimento backend · Java & Spring Boot</ApresentationText>
            <Developer>Thauan Corrêa</Developer>
            <Role>Desenvolvedor backend Java</Role>
            <ApresentationText>
              Atuo no desenvolvimento backend com Java e Spring Boot.
              Conheça os projetos e as experiências que fazem parte da minha trajetória.
            </ApresentationText>
            <HeroActions>
              <Button href="#projetos">Explorar projetos</Button>
              <DownloadLink href={Curriculo} download="Curriculo-Thauan.pdf">
                <span>Baixar currículo</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="M12 3v12m-5-5 5 5 5-5M5 16v4h14v-4" />
                </svg>
              </DownloadLink>
            </HeroActions>
          </div>
          <HeroMark aria-hidden="true"><img src={logo} alt="" /></HeroMark>
        </Section>
        <Divider/>
        <Section id="sobre">
          <Title>Sobre Mim</Title>
          <Container>
            {AboutMe.text.split(/\n\s*\n/).filter((paragraph) => paragraph.trim()).map((paragraph) => (
              <Text key={paragraph}>{paragraph.trim()}</Text>
            ))}
          </Container>
        </Section>
        <Divider/>
        <Section id="curriculo">
          <Title>Currículo</Title>
          <ResumeTimeline />
          <Subtitle>Conhecimentos</Subtitle>
          <EachLine/>
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
        <Contact />
      </ContentContainer>
    </Layout>
  );
}

export default Home;
