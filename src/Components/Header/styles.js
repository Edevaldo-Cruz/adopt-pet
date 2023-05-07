import styled from "styled-components";
import banner from "../assets/images/banner.jpg";

export const Header = styled.header`
  width: 100%;
  height: 50rem;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
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

export const DivText = styled.div`
  width: 55%;
  height: 10%;
  border-radius: 1rem;
  padding-top: 22rem;
`;

export const Text = styled.div`
  margin-right: 10%;
  margin-left: 10%;
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: end;
`;
