import { useState, useEffect } from "react";
import { Card, Carousel, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import AdoptCard from "../AdoptCard";
import AdoptStep from "../AdoptStep";
import { Background, AdoptTitle } from "./styles";
import Register from "../Register";

export default function Adopt() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <Background>
      <Container>
        <AdoptTitle>
          <p>
            <span>
              Me <strong>leve </strong>pra{" "}
            </span>{" "}
            <strong>casa!!</strong>
          </p>
        </AdoptTitle>
        <AdoptCard onClick={handleButtonClick} />
        <AdoptStep isOpen={isOpen} handleClick={handleClick} />
      </Container>
      <Register handleCloseModal={handleModalClose} show={showModal} />
    </Background>
  );
}
