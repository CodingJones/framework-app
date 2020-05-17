import React from "react";
import styled from "styled-components";

const NextButton = styled.button`
  margin-top: 70px;
  width: 100px;
  height: 60px;

  color: #0d47a1;
  text-transform: none;

  background: #eeeeee;
  border: 1px solid #d9dbdf;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border: none;

  &:hover {
    box-shadow: 0px 4px 20px #999;
    border-radius: 40px;
  }
`;

export function ButtonNext(props) {
  return <NextButton>{props.label} </NextButton>;
}
