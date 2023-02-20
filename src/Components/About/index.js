import {
  Background,
  Title,
  Container,
  Button,
  Paragraph,
  AboutContainer,
  AboutNumber,
} from "./styles";

export default function About() {
  return (
    <Background>
      <Container>
        <Title>
          <span>About</span> Dogs
        </Title>
        <Paragraph>
          Os animais abandonados são um problema crescente em muitas regiões do
          mundo. De acordo com a Organização Mundial de Saúde (OMS), cerca de
          200 milhões de animais de estimação são abandonados a cada ano. Dessas
          centenas de milhões de vítimas, estima-se que apenas 5% a 7% acabem
          sendo resgatadas e adotadas. Além disso, muitos animais que são
          deixados nas ruas sofrem com a falta de abrigo, comida e cuidados
          veterinários adequados. Infelizmente, muitos desses animais acabam
          morrendo devido a doenças, fome ou acidentes nas estradas. A questão
          do abandono de animais é complexa e requer esforços coordenados de
          indivíduos, organizações sem fins lucrativos, governos e comunidades
          para garantir que os animais recebam o apoio e cuidado necessários
          para ter uma vida saudável e feliz.
        </Paragraph>
        <Button>Read More</Button>
      </Container>
    </Background>
  );
}
