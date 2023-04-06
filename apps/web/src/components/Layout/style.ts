import { Inter } from "next/font/google";
import styled from "styled-components";

const inter = Inter({
  subsets: ["latin"],
});

export const Container = styled.main.attrs({
  className: inter.className,
})`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  gap: 20px;
`;

export const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.sidebar};
  border-radius: 10px;
  width: 30%;
  padding: 20px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
`;
