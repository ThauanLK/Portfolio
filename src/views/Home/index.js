import React from "react";
import { Item,List } from "./components/ItemOfList/index";
import { Container, Text } from "./styles";
import Layout from "../../components/Layout/Layout";

function Home(props) {
  return (
    <Layout>
      <Container>
        <Text>
          <h1>Meus repositórios</h1>
        </Text>
        <section className="list">
          <Item/>
          <Item/>
          <Item />
          <Item/>
        </section>
        <Text>
          Para ver a lista completa acesse:{" "}
          <a href="https://github.com/ThauanLK"> https://github.com/ThauanLK</a>
        </Text>
      </Container>
    </Layout>
  );
}

export default Home;
