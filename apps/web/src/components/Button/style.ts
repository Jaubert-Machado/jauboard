import styled from "styled-components";

export const Container = styled.button`
  &:hover {
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }

  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  background-color: #ff6d00;
  padding: 10px 50px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const Text = styled.span`
  color: inherit;
  font-weight: 600;
  font-size: 1.7rem;
  text-transform: uppercase;
`;
