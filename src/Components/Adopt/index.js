import { useState, useEffect } from "react";
import { Card, Carousel, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import AdoptCard from "../AdoptCard";
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
        <AdoptCard />
      </Container>
    </Background>
  );
}
