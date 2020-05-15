import React from "react";
import styled from "styled-components";

const Button1 = styled.button`
  padding: 0.5em 2em;
  background: #ffb236;
  color: #0d47a1;
  border-radius: 40px;
  font-size: 24px;
  text-decoration: none;
  border-style: none;
  transition: background-color 0.5s ease-out, color 0.5s ease-out;

  &:hover {
    color: #e5e5e5;
    background-color: #f57c00;
  }
`;

export function Button(props) {
  return <Button1>{props.label}</Button1>;
}
