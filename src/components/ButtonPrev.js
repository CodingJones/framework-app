import React from "react";
import styled from "styled-components";

const PrevButton = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 15px;
  color: #0d47a1;
  text-transform: none;
  background: #eeeeee;
  border-radius: 40px;
  border: none;
`;

export function ButtonPrev(props) {
  return <PrevButton>{props.label} </PrevButton>;
}
