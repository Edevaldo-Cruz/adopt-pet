import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  margin-inline: 15%;
  margin-block: 2%;
  background-color: ciano;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const SmallTitle = styled.h3`
  text-align: center;
  margin-block: 2rem;
`;

export const DefaultText = styled.p`
  font-size: 1.3rem;
  color: #707070;
  text-align: justify;
`;

export const Separator = styled.div`
  width: 100%;
  height: 85%;
  margin-inline: 2rem;
  padding-left: 2rem;
  border-left: 0.2rem solid #ccc;
`;

export const ContainerNewButton = styled.div`
  padding-inline: 10%;
  padding-block: 2rem;
`;

export const DefaultButton = styled(Button)`
  width: 100%;
`;
