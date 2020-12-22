import React, {useEffect, useState} from "react";
import { Card, CardList, LineCardList } from "./components/ItemOfList/index";
import { Title } from "../../components/Text/index";
import { Container, Text } from "./styles";
import { ContentContainer } from "../../components/containers/index";
import Layout from "../../components/Layout/Layout";
import {getRepo} from "../../services/index";

function Home(props) {

  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    console.log(getRepo());
    
  });

  return (
    <Layout>
      <ContentContainer>
        <section id="sobre">
          <Container>
          <Title>Sobre Mim</Title>
          </Container>
        </section>
        <section>
        <Title>Meus repositórios</Title>
        <Text>
          Para ver a lista completa acesse:{" "}
          <a href="https://github.com/ThauanLK"> https://github.com/ThauanLK</a>
        </Text>
        </section>
        <section id="curriculo">
        <Title>Currículo</Title>
        </section>
        <section id="contato">
        <Title>Entre Contato Comigo</Title>

        </section>
      </ContentContainer>
    </Layout>
  );
}

export default Home;
