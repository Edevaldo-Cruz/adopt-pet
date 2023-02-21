import { useState, useEffect } from "react";
import { Card, Carousel, Row, Col } from "react-bootstrap";
import axios from "axios";
import { NextPrevButton, NextPrevIcon, CardTitle } from "./styles";

export default function AdoptCard() {
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
    <Carousel controls={false}>
      <NextPrevButton
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <NextPrevIcon
          className="carousel-control-prev-icon"
          aria-hidden="true"
        />
      </NextPrevButton>
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
            <Row>
              {dogGroup.map((dog, index) => (
                <Col key={index}>
                  <button>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={dog.image} />
                      <Card.Body>
                        <CardTitle>{dog.name}</CardTitle>
                      </Card.Body>
                    </Card>
                  </button>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      <NextPrevButton
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <NextPrevIcon
          className="carousel-control-next-icon"
          aria-hidden="true"
        />
      </NextPrevButton>
    </Carousel>
  );
}
