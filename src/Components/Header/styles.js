import styled from "styled-components";
import banner from "../assets/images/banner.jpg";

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 50rem;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  z-index: 999;
  box-shadow: 0 0 10px rgba(88, 0, 0, 0.2);
`;

export const Title = styled.h1`
  color: #fff;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 60px;
`;

export const Subtitle = styled.p`
  color: #fff;
  margin: 0;
  font-size: 24px;
`;

export const Button = styled.button`
  background-color: #cf8c24;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
`;

export const ContainerText = styled.div`
  width: 80%;
  height: 50%;
  margin-top: 15%;
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 1rem;
  padding: 3rem;
`;

export const Text = styled.div`
  margin-right: 5%;
  margin-left: 5%;
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: end;
`;
