import styled from "styled-components";
import { Card, Button, Carousel } from "react-bootstrap";

export const CardTitle = styled.h5`
  text-align: right;
  width: 60%;
  height: 50%;
  background-color: grey;
  margin-top: -30px;
  color: white;
  padding-right: 10px;
`;

export const CardHover = styled(Card)`
  width: 88%;
  margin-inline: 1rem;
  transition: transform 0.3s ease-in-out;
  border: solid 15px white;
  justify-content: center;
  ${(props) =>
    props.index % 2 === 0
      ? "transform: rotate(8deg);"
      : "transform: rotate(-12deg);"}

  &:hover {
    transform: rotate(${(props) => (props.index % 2 === 0 ? "0deg" : "0deg")})
      scale(1.25);
    z-index: 9;
  }
`;

export const ButtonCard = styled(Button)`
  border: none;
  border-radius: 0;
  height: 40rem;
  width: 100%;

  &:hover {
    background-color: transparent;
  }
`;

export const CardCarousel = styled(Carousel)`
  height: 40rem;

  .carousel-control-prev,
  .carousel-control-next {
    width: 4rem;
    height: 4rem;
    border-radius: 2.5rem;
    background-color: #f7941d;
    opacity: 0.8;
    position: absolute;
    top: 43%;
    bottom: 0;

    &:hover {
      opacity: 1;
      width: 5rem;
      height: 5rem;
    }
  }

  .carousel-control-prev {
    left: -10%;
  }

  .carousel-control-next {
    right: -10%;
  }
`;
