import React from "react";
import { Card, CardList, LineCardList } from "./components/ItemOfList/index";
import { Title } from "../../components/Text/index";
import { Container, Text } from "./styles";
import { ContentContainer } from "../../components/containers/index";
import Layout from "../../components/Layout/Layout";

function Home(props) {
  return (
    <Layout>
      <ContentContainer>
        <section id="sobre">
        </section>
        <section>
        <Title>Meus repositórios</Title>
        <Text>
          Para ver a lista completa acesse:{" "}
          <a href="https://github.com/ThauanLK"> https://github.com/ThauanLK</a>
        </Text>
        </section>
        <section id="curriculo">

        </section>
        <section id="contato">

        </section>
      </ContentContainer>
    </Layout>
  );
}

export default Home;
