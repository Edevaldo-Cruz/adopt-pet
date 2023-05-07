import { useState, useEffect } from "react";
import { Card, Carousel, Row, Col } from "react-bootstrap";
import axios from "axios";
import { CardTitle, CardHover, ButtonCard, CardCarousel } from "./styles";

function CustomCarouselButton({ onClick, icon }) {
  return (
    <button type="button" className="custom-carousel-button" onClick={onClick}>
      {icon}
    </button>
  );
}

export default function AdoptCard({ onClick }) {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios.get("https://localhost:7261/Pet/GetAllPets");
      const petList = response.data;
      const emptyUserPets = petList.filter((pet) => pet.idUser == null);
      setDogs(emptyUserPets);
    };
    fetchDogs();
  }, []);

  return (
    <CardCarousel indicators={false} interval={20000}>
      {dogs
        .reduce((accumulator, dog, index) => {
          if (index % 4 === 0) {
            accumulator.push([]);
          }
          accumulator[accumulator.length - 1].push(dog);
          return accumulator;
        }, [])
        .map((dogGroup, index) => (
          <Carousel.Item key={index}>
            <ButtonCard
              variant="outline-secondary"
              onClick={onClick}
              aria-controls="example-collapse-text"
            >
              <Row className="align-items-center">
                {dogGroup.map((dog, index) => (
                  <Col key={index}>
                    <CardHover index={index}>
                      <Card.Img variant="top" src={dog.image} />
                      <CardTitle>{dog.name}</CardTitle>
                    </CardHover>
                  </Col>
                ))}
              </Row>
            </ButtonCard>
          </Carousel.Item>
        ))}
    </CardCarousel>
  );
}
