import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 50px;
`;

export const Header = styled.header`
  //   flex: 1;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 200;
`;

export const Register = styled.h2`
  font-size: 1.8rem;
  margin-top: 15px;
  font-weight: 200;
`;

export const RegisterLink = styled(Link)`
  color: #ff6d00;
  text-decoration: none;
  font-weight: 400;
`;

export const InputContainer = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //   width: max-content;
  position: relative;
  height: 40%;
`;

export const PasswordText = styled.p`
  font-size: 1.2rem;
  right: 0;
  position: absolute;
`;
