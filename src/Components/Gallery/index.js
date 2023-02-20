import { useState } from "react";
import {
  Background,
  GalleryMain,
  Container,
  Row,
  Col,
  AboutTitle,
  AboutText,
  GalleryImageContainer,
  GalleryImage,
  Overlay,
  OverlayText,
  GalleryImages,
  GalleryBlogContainer,
  GalleryImageS,
  GalleryImage2,
  DivText,
} from "./styles";

import img1 from "../assets/images/gallery-img1.jpg";
import img2 from "../assets/images/gallery-img2.jpg";
import img3 from "../assets/images/gallery-img3.jpg";
import img4 from "../assets/images/gallery-img4.jpg";
import img5 from "../assets/images/gallery-img5.jpg";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DogCarousel from "../Carousel";

export default function Gallery() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // state para controlar o hover na imagem
  const [isImageHovered, setIsImageHovered] = useState(false);

  // função para ativar hover na imagem
  const handleImageHover = () => {
    setIsImageHovered(true);
  };

  // função para desativar hover na imagem
  const handleImageLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <>
      <button onClick={handleShow}>
        <GalleryMain>
          <Background>
            <Container>
              <Row>
                <Col>
                  <AboutTitle>
                    <p>
                      <span>Nossos</span> <strong>cachorros</strong>
                    </p>
                  </AboutTitle>
                  <DivText>
                    <AboutText>
                      Venha conhecer nossos amigos peludos! Dê uma olhada em
                      nossa galeria de cães e se encante com as fotos mais fofas
                      que você já viu!
                    </AboutText>
                  </DivText>
                </Col>
              </Row>
              <Row>
                <GalleryImageContainer
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                >
                  <GalleryImageS src={img1} />

                  {isImageHovered && (
                    <Overlay>
                      <OverlayText>
                        <strong>PuppyDogPetAnimal</strong>
                      </OverlayText>
                    </Overlay>
                  )}
                </GalleryImageContainer>
                <GalleryBlogContainer
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                >
                  <GalleryImage2 src={img2} alt="Gallery Image 2" />

                  {isImageHovered && (
                    <Overlay>
                      <OverlayText>
                        <strong>PuppyDogPetAnimal</strong>
                      </OverlayText>
                    </Overlay>
                  )}
                </GalleryBlogContainer>
              </Row>

              <GalleryImages>
                <Row>
                  <GalleryBlogContainer
                    onMouseEnter={handleImageHover}
                    onMouseLeave={handleImageLeave}
                  >
                    <GalleryImage src={img3} alt="Gallery Image 3" />

                    {isImageHovered && (
                      <Overlay>
                        <OverlayText>
                          <strong>PuppyDogPetAnimal</strong>
                        </OverlayText>
                      </Overlay>
                    )}
                  </GalleryBlogContainer>

                  <Col sm={5}>
                    <GalleryImageContainer
                      onMouseEnter={handleImageHover}
                      onMouseLeave={handleImageLeave}
                    >
                      <GalleryImageS src={img4} />

                      {isImageHovered && (
                        <Overlay>
                          <OverlayText>
                            <strong>PuppyDogPetAnimal</strong>
                          </OverlayText>
                        </Overlay>
                      )}
                    </GalleryImageContainer>
                    <GalleryBlogContainer
                      onMouseEnter={handleImageHover}
                      onMouseLeave={handleImageLeave}
                    >
                      <GalleryImageS src={img5} alt="Gallery Image 5" />

                      {isImageHovered && (
                        <Overlay>
                          <OverlayText>
                            <strong>PuppyDogPetAnimal</strong>
                          </OverlayText>
                        </Overlay>
                      )}
                    </GalleryBlogContainer>
                  </Col>
                </Row>
              </GalleryImages>
            </Container>
          </Background>
        </GalleryMain>
      </button>

      <Modal show={show} onHide={handleClose}>
        <DogCarousel />
      </Modal>
    </>
  );
}
