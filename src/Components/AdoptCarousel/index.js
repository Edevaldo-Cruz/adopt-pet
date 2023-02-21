import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import { ContainerItem, ContainerText } from "./styles";
import { Card } from "react-bootstrap";

export default function AdoptCarousel() {
  const [Dogs, setDogs] = useState([]);

  var text = [
    "Companheirismo: Os cães são animais sociais e amorosos. Eles são companheiros leais e ficarão felizes em estar perto de seus donos. Adotar um cão significa ter uma companhia amorosa em casa, sempre pronta para dar e receber carinho.",
    "Redução do estresse: Ter um cão pode ajudar a reduzir o estresse. Os cães são excelentes ouvintes e não julgam seus donos. Eles estão sempre lá para apoiar seus donos, o que pode ser muito reconfortante quando as coisas ficam difíceis.",
    "Aumento da atividade física: Ter um cão significa ter uma boa razão para sair e se exercitar. Passear com o cachorro é uma ótima maneira de manter-se ativo e em forma. Além disso, jogar bola e brincar com o cachorro também é um excelente exercício.",
    "Ensina responsabilidade: Adotar um cão pode ser uma excelente oportunidade para ensinar responsabilidade para as crianças. Os cães precisam ser alimentados, passeados e cuidados, o que pode ajudar as crianças a desenvolver habilidades importantes de responsabilidade.",
    "Melhora a saúde mental: Vários estudos mostraram que ter um cão pode ajudar a melhorar a saúde mental. Os cães são excelentes companheiros e podem ajudar a reduzir a ansiedade e a depressão.",
    "Ajuda a combater a solidão: A solidão pode ser um grande problema para muitas pessoas, especialmente para os idosos. Adotar um cão pode ser uma ótima maneira de combater a solidão, já que os cães são excelentes companheiros.",
    "Melhora a saúde do coração: Vários estudos mostraram que ter um cão pode ajudar a melhorar a saúde do coração. Os cães são excelentes companheiros de exercícios e podem ajudar a reduzir o risco de doenças cardíacas.",
    "Aumento da autoestima: Ter um cão pode ajudar a aumentar a autoestima. Os cães são ótimos para dar amor e receber amor, o que pode ajudar as pessoas a se sentir mais valorizadas.",
    "Ensina empatia: Adotar um cão pode ajudar a ensinar empatia. Os cães são animais que precisam de amor e cuidado, e isso pode ajudar as pessoas a se tornarem mais empáticas com os outros.",
    "Criação de laços: Ter um cão pode ajudar a criar laços entre as pessoas. Adotar um cão significa que toda a família tem uma responsabilidade em comum, o que pode ajudar a criar laços mais fortes entre as pessoas. Além disso, o amor pelos cães pode ser um ponto em comum que une pessoas diferentes.",
  ];

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios.get(
        "https://localhost:7261/Pet/GetAdoptionAvailable"
      );
      setDogs(response.data);
    };

    fetchDogs();
  }, []);

  return (
    <Carousel>
      {/* <div style={{ margin: "10%" }}> */}
      {Dogs.map((dog, index) => (
        <Carousel.Item key={index}>
          <ContainerItem>
            <img className="d-block w-25" src={dog.image} alt="First slide" />
            <Carousel.Caption>
              <ContainerText>
                <h3>{dog.name}</h3>
                <p>{text[index]}</p>
              </ContainerText>
            </Carousel.Caption>
          </ContainerItem>
        </Carousel.Item>
      ))}
      {/* </div> */}
    </Carousel>
  );
}
