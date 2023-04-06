import Link from "next/link";
import React, { FC } from "react";
import * as B from "./style";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  to?: string;
}

const Button: FC<Props> = ({ children, to, ...props }) => {
  return (
    <B.Container {...props}>
      <B.Text>{children}</B.Text>
    </B.Container>
  );
};

export default Button;
