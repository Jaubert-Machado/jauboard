import styled from "styled-components";

export const Container = styled.div<{ $focus: boolean }>`
    &: hover {
        border: 1px solid ${({ theme }) => theme.colors.accent};
    }
    border: ${({ $focus, theme }) =>
      $focus
        ? `1px solid ${theme.colors.accent}`
        : `1px solid ${theme.colors.accent}40`}};
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    width: 100%;
    `;

export const Box = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: transparent;
`;

export const Label = styled.label<{ $active: boolean }>`
    top: 50%;
    left: 10px;
    transform: ${({ $active }) =>
      $active ? "translateY(-45px) scale(0.8)" : "translateY(-50%)"}};
    transition: all 0.2s ease-in-out;
    font-size: 1.8rem;
    color: rgba(0, 0, 0, 0.5);
    position: absolute;
    pointer-events: none;
    padding: 0 10px;
`;

export const Field = styled.input`
  &:focus {
    outline: none;
  }
  height: 100%;
  overflow: hidden;
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  padding: 15px 20px;
`;

export const Button = styled.button`
  &:focus {
    outline: none;
    border: 1px solid #000;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding-right: 10px;
`;
