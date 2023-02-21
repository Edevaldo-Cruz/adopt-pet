import { useState, useEffect } from "react";
import { Card, Carousel, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import AdoptCarousel from "../AdoptCarousel";
import AdoptStep from "../AdoptStep";
import { Background, AdoptTitle } from "./styles";

export default function Adopt() {
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
        <AdoptCarousel />
        <AdoptStep />
      </Container>
    </Background>
  );
}
