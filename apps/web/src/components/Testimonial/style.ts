import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 10px;
  height: 190px;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #fbe0ce;
  padding: 20px;
  border-radius: 10px;
`;

export const CardBody = styled.div`
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  font-size: 1.6rem;
  font-weight: 200;
`;

export const CardFooter = styled.div`
  display: flex;
`;

export const Info = styled.div`
  height: max-content;
  margin-left: 10px;
  margin-top: 10px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
`;

export const Title = styled.p`
  font-weight: 200;
  font-size: 1.2rem;
  margin-top: 5px;
`;

export const CardImage = styled(Image).attrs({
  width: 60,
  height: 60,
})`
  border-radius: 50%;
`;

export const Pagination = styled.div``;
