import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";
import Testimonial from "../Testimonial";
import * as S from "./style";

interface Props {
  path: string;
}

const Login = () => {
  return (
    <S.LoginContainer>
      <div>
        <S.Logo>jauboard</S.Logo>
        <S.Title>Os seus dados na ponta dos seus dedos</S.Title>
        <S.Subtitle>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
        </S.Subtitle>
      </div>
      <Testimonial />
    </S.LoginContainer>
  );
};

const Sidebar: FC<Props> = ({ path }) => {
  switch (path) {
    case "/dashboard":
      return <h1>Dash</h1>;
    default:
      return <Login />;
  }
};

export default Sidebar;
