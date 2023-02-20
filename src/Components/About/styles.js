import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 50rem;
  background: rgba(102, 102, 102, 0.5);
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #f7941d;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #f7941d;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;
