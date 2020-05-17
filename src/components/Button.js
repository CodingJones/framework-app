import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 15px 50px;
  background: #ffb236;
  color: #0d47a1;
  border-radius: 40px;
  text-decoration: none;
  border-style: none;
  margin-top: 10px;
  margin-bottom: 10px;

  transition: background-color 0.3s ease-out, color 0.3s ease-out;

  &:hover {
    color: #e5e5e5;
    background-color: #f57c00;
  }
`;

export default function Button(props) {
  return <StyledButton> {props.label} </StyledButton>;
}
