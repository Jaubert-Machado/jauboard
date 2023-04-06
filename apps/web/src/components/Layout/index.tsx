import React, { FC } from "react";
import * as S from "./style";

interface Props {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

const Layout: FC<Props> = ({ content, sidebar }) => {
  return (
    <S.Container>
      <S.Sidebar>{sidebar}</S.Sidebar>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};

export default Layout;
