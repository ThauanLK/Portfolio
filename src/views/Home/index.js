import React, {useEffect, useState} from "react";
import { Card, CardList, LineCardList } from "./components/ItemOfList/index";
import { Container, Text, ContentContainer, Title, Button, ButtonContainer } from "./styles";
import Layout from "./components/Layout/index";
import {getRepo} from "../../services/index-git";
import {ContactWithMe} from "../../services/index-email";
import FormField from "./components/FormField/index";
import useForm from "../../hooks/useForm/index";
import Curriculo from "../../documents/CurriculoThauan.pdf"
import ProgramLanguages from "./ProgramLanguages";

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
  

  console.log("LISTA",repos);
  return (
    <Layout>
      <ContentContainer>
        <section id="sobre">
          <Title>Sobre Mim</Title>
          <Container>
            <Text>
              Pokem ipsum dolor sit amet Hariyama Skiploom I know it's my destiny Ponyta Boldore Swift. Ut labore et dolore magna aliqua Chatot Rotom Rotom Silver Pokemon Honchkrow. Celadon Department Store Marshtomp Quagsire Eelektross Octillery Turtwig Sawsbuck. Fire Tangela Sunflora make it double Ash's mother Toxicroak Rotom. Splash Ash Ketchum Meowth Charmeleon Ho-oh Blaziken Bouffalant.
              Growl Probopass Latias Gothita Volbeat Fuchsia City Johto. Kanto Moltres Farfetch'd Trubbish Sinnoh Silph Scope Shaymin. Ash Storm Badge we're blasting off again Pichu Scolipede Solrock Piplup. Body Slam Rhyhorn Cofagrigus Pidgeotto Vigoroth Magby Rotom. Ivysaur Electric Dodrio Froslass Fighting to train them is my cause a wild Pokemon appeared.
            </Text>
          </Container>
        </section>
        <section id="projetos">
          <Title>Meus repositórios</Title>
          <Text>
            Para ver a lista completa acesse:{" "}
            <a href="https://github.com/ThauanLK" target="blank"> https://github.com/ThauanLK</a>
          </Text>
        </section>
        <section id="curriculo">
          <Title>Currículo</Title>
          <Text>Formação Academica</Text>
          <Text>Experiencia Anterior</Text>
          <Text>Conhecimentos</Text>
          {ProgramLanguages.map((eachLanguage,index) => (
            <div key={index}>
              <Text >{eachLanguage.name}</Text>
              <Text>{eachLanguage.level}</Text>
            </div>
          ))}
          <ButtonContainer>
            <a href={Curriculo} download="Curriculo-Thauan Corrêa de Oliveira">
            <Button>
              DOWNLOAD
            </Button>
            </a>
          </ButtonContainer>
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
