import { useState } from "react";
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
import Register from "../Register";

export default function HeaderSection() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

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
            <Button onClick={handleClick}>Cadastre-se</Button>
            <Register handleCloseModal={handleModalClose} show={showModal} />
          </ContainerBtn>
        </DivText>
      </Container>
    </Header>
  );
}
