import { useState, useEffect } from "react";
import { Card, Carousel, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { NextPrevButton, NextPrevIcon, CardTitle } from "./styles";

export default function AdoptCard() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random/10"
      );
      setDogs(response.data.message);
    };

    fetchDogs();
  }, []);

  return (
    <Carousel>
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
                    <span className="sr-only">Previous</span>
                  </NextPrevButton>
                  <button>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={dog} />
                      <Card.Body>
                        <CardTitle>Card Title</CardTitle>
                      </Card.Body>
                    </Card>
                  </button>
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
                    <span className="sr-only">Next</span>
                  </NextPrevButton>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}
