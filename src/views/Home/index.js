import React, {useEffect, useState} from "react";
import { Card, CardList, LineCardList } from "./components/ItemOfList/index";
import { Container, Text, ContentContainer, Title } from "./styles";
import Layout from "./components/Layout/index";
import {getRepo} from "../../services/index";

function Home(props) {

  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    setRepos(getRepo());
  },[]);
  
  console.log("LISTA",repos);
  return (
    <Layout>
      <ContentContainer>
        <section >
          <Container id="sobre">
          <Title>Sobre Mim</Title>
          <Text>Pokem ipsum dolor sit amet Hariyama Skiploom I know it's my destiny Ponyta Boldore Swift. Ut labore et dolore magna aliqua Chatot Rotom Rotom Silver Pokemon Honchkrow. Celadon Department Store Marshtomp Quagsire Eelektross Octillery Turtwig Sawsbuck. Fire Tangela Sunflora make it double Ash's mother Toxicroak Rotom. Splash Ash Ketchum Meowth Charmeleon Ho-oh Blaziken Bouffalant.
            Growl Probopass Latias Gothita Volbeat Fuchsia City Johto. Kanto Moltres Farfetch'd Trubbish Sinnoh Silph Scope Shaymin. Ash Storm Badge we're blasting off again Pichu Scolipede Solrock Piplup. Body Slam Rhyhorn Cofagrigus Pidgeotto Vigoroth Magby Rotom. Ivysaur Electric Dodrio Froslass Fighting to train them is my cause a wild Pokemon appeared.</Text>
          </Container>
        </section>
        <section>
        <Title>Meus repositórios</Title>
        <Text>
          Para ver a lista completa acesse:{" "}
          <a href="https://github.com/ThauanLK" target="blank"> https://github.com/ThauanLK</a>
        </Text>
        </section>
        <section id="curriculo">
        <Title>Currículo</Title>
        <p>
          okem ipsum dolor sit amet Pelipper to protect the world from devastation Shelgon Magikarp Normal Walrein. Dark Nurse Joy Brock Cherrim Gothitelle Ice Berry Magmortar. Yellow Rotom Whiscash Giratina Eelektross Dusclops Nuzleaf. Lavender Town Klang Palpitoad Jumpluff Drifblim Mamoswine Hydro Pump. Strength Thundershock Nidoking The Power Of One Carnivine Shieldon Deoxys.
Dark I like shorts Regice Mudkip Litwick Shieldon Bonsly. Leech Life Cherrim to train them is my cause Purugly Ekans Blaziken Cottonee. Flamethrower Lucario Latios Luxio Carvanha Pidgeot Venipede. We're blasting off again Abomasnow Rotom Snorunt Weepinbell Bibarel Aipom. Kanto Goldeen Wooper Lombre Tyranitar Vespiquen Stantler.
Tail Whip they're comfy and easy to wear Mew Nincada Vaporeon Zekrom Dodrio. Leech Life Sigilyph Officer Jenny Professor Elm Charmeleon Serperior Togepi. Ut labore et dolore magna aliqua Gastly Volcano Badge Milotic Fraxure Plusle Psychic. Poison Shellos Pinsir Crustle Slash Pikachu Exeggutor. S.S. Anne Bagon Kanto Chikorita Simisage Treecko Magneton.
Misty Mandibuzz Mamoswine Doduo Fog Badge Drowzee et dolore magna aliqua. Bubble Magmar Combusken like no one ever was Virizion Weezing the enemy Pokemon fainted. Qui officia deserunt mollit Running Shoes I know it's my destiny Reuniclus Uxie Hoenn Dunsparce. Kanto Blaziken Poochyena Tyrogue Patrat Drifloon Dialga. Normal Tepig Sandile Beautifly Beartic Swanna Scrafty.
Ground Beheeyem Petilil Floatzel Vermilion City Earth Badge Krookodile. Yellow Kingler Miltank Ho-oh Magikarp Pachirisu Rock. Venusaur Growl Horsea Pansear Poochyena Karrablast Chinchou. Brock Phione Crobat Luvdisc Gengar Flamethrower Whirlipede. Velit esse cillum dolore eu fugiat nulla pariatur Aerodactyl Rhyhorn Pikachu Wing Attack Carvanha Emboar.
        </p>
        </section>
        <section id="contato">
        <Title>Entre Contato Comigo</Title>
        </section>
      </ContentContainer>
    </Layout>
  );
}

export default Home;
