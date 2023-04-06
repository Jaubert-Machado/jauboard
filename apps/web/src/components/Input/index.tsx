import React, { FC, useState } from "react";
import { Eye, EyeSlash } from "phosphor-react";
import * as S from "./style";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  password?: boolean;
  icon?: React.ReactNode;
  where?: "left" | "right";
}

const Input: FC<Props> = ({ type, label, register, placeholder }) => {
  const [secure, setSecure] = useState(true);
  const [moveLabel, setMoveLabel] = useState(false);
  const [focus, setFocus] = useState(false);
  const [dinamicType, setDinamicType] = useState(type);

  function onFocus() {
    setMoveLabel(true);
    setFocus(true);
  }

  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    setMoveLabel(!!e.target.value);
    setFocus(false);
  }

  function onHideClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSecure(!secure);
    setDinamicType((prev) => (prev === "password" ? "text" : "password"));
  }

  return (
    <S.Box>
      <S.Container $focus={focus}>
        <S.Label htmlFor={type} $active={moveLabel}>
          {label}
        </S.Label>
        <S.Field
          {...register(type, {
            onChange: (e) => {
              setMoveLabel(!!e.target.value);
            },
            onBlur: (e) => {
              onBlur(e);
            },
          })}
          placeholder={placeholder}
          id={type}
          onFocus={onFocus}
          type={dinamicType}
        />
        {type === "password" && (
          <S.Button onClick={onHideClick}>
            {secure ? (
              <Eye size={28} color="rgba(0, 0, 0, 0.5)" />
            ) : (
              <EyeSlash size={28} color="rgba(0, 0, 0, 0.5)" />
            )}
          </S.Button>
        )}
      </S.Container>
    </S.Box>
  );
};

export default Input;
