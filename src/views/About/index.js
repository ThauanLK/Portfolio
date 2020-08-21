import React from "react";
import Layout from "../../components/Layout/Layout";
import { Container, ContentContainer } from "../../components/containers/index";
import { Text, Title } from "../../components/Text/index";
import {} from "./components/List/List"

export default function index() {
  return (
    <Layout>
      <ContentContainer>
        <Title>Sobre Mim</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          velit tellus, vulputate maximus lorem quis, dictum venenatis metus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
          scelerisque felis, vel molestie nisi. Aenean maximus ipsum nec
          condimentum cursus. Maecenas nisi nulla, blandit sit amet ornare et,
          fermentum in tortor. Vestibulum rhoncus ex eros, ac fringilla felis
          viverra ac. Vestibulum a accumsan leo. In hac habitasse platea
          dictumst. Sed a nulla euismod, faucibus diam efficitur, consequat
          urna. Donec blandit massa tortor, dignissim euismod eros mattis id.
          Donec sit amet ultricies ligula. Suspendisse quam tellus, vehicula
          vitae mauris id, cursus suscipit tellus. Morbi a metus ut nulla
          accumsan tristique. Quisque eget ante sit amet sapien finibus porta
          faucibus eu lacus. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nulla dignissim eros eu nibh consequat pulvinar. Aenean
          sollicitudin odio velit, quis pulvinar purus consequat ut. Proin nec
          mauris vitae nisi ultricies pellentesque. Nullam iaculis in justo non
          pulvinar. Maecenas ullamcorper vehicula eros, et laoreet tellus
          convallis ac. Quisque luctus, justo ac volutpat tristique, neque
          mauris lobortis sapien, ac tincidunt lectus sem a ligula.
        </Text>
        <Title>Currículo</Title>
        
      </ContentContainer>
    </Layout>
  );
}
