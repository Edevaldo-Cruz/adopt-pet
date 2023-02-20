import styled from "styled-components";

export const GalleryMain = styled.div`
  /* background-color: #f5f5f5;
  padding: 70px 0; */
`;

export const GalleryTitle = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  margin: 0 0 30px;
`;

export const GallerySubtitle = styled.p`
  color: #000;
  font-size: 18px;
  margin: 0 0 40px;
`;

export const GalleryImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const GalleryImageContainer = styled.div`
  width: 49%;
  margin-bottom: 20px;
  position: relative;
`;

export const GalleryImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

export const GalleryImageS = styled.img`
  width: 40rem;
  height: 18.75rem;
`;

export const GalleryImage2 = styled.img`
  margin-left: 6rem;
  width: 28rem;
  height: 18.75rem;
`;

export const GalleryImageOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 24px;
  left: 0;
  opacity: 0;
  padding: 20px;
  position: absolute;
  top: 0;
  transition: opacity 0.5s ease;
  width: 100%;
`;

export const GalleryImageText = styled.strong`
  color: #fff;
  font-weight: bold;
`;

export const Background = styled.div`
  padding: 60px 0;
  background: rgb(247, 148, 29);
  background: radial-gradient(
    circle,
    rgba(247, 148, 29, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const Container = styled.div`
  margin-inline: 20rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const AboutTitle = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: right;
  strong {
    color: #f7941d;
  }
`;

export const DivText = styled.div`
  margin-inline-start: 20%;
`;

export const AboutText = styled.p`
  color: #fff;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 60px;
  text-align: right;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.5s ease-in-out;
  width: 100%;
`;

export const OverlayText = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const GalleryBlogContainer = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

export const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
`;

export const GalleryOverlayText = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;
