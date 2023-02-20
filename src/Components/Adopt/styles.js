import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 50rem;
  background: rgb(204, 204, 204);
  background: linear-gradient(
    320deg,
    rgba(204, 204, 204, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: cover;
  background-position: center;
  padding-block: 5rem;
`;

export const AdoptTitle = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: left;
  strong {
    color: #f7941d;
  }
`;
