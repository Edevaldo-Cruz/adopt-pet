import styled from "styled-components";
import {
  Header,
  Title,
  Subtitle,
  Button,
  DivText,
  ContainerBtn,
  Text,
} from "./styles";
import NavBar from "../NavBar/index.js";
import { Container } from "react-bootstrap";

export default function HeaderSection() {
  return (
    <Header>
      <NavBar />
      <Container>
        <DivText>
          <Title>Adote um pet!</Title>
          <Text>
            <Subtitle>
              "Adotar um animal é dar um lar, amor e carinho a um ser que,
              muitas vezes, já passou por situações difíceis. É transformar a
              vida desse animal e receber em troca o amor mais puro e sincero
              que existe. Não compre, adote. Você pode mudar uma vida para
              sempre."
            </Subtitle>
          </Text>
          <ContainerBtn>
            <Button>Saiba mais</Button>
          </ContainerBtn>
        </DivText>
      </Container>
    </Header>
  );
}
