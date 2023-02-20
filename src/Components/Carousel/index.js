import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export default function DogCarousel() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await axios.get(
      "https://dog.ceo/api/breeds/image/random/5"
    );
    setImages(response.data.message);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Carousel style={{ width: "30vw" }}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image} alt={`Dog ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
