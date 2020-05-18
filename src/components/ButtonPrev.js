import React from "react";
import styled from "styled-components";

const PrevButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 40px;
  color: #0d47a1;
  text-transform: none;
  background: #eeeeee;
  border: none;
`;

export function ButtonPrev(props) {
  return <PrevButton>{props.label} </PrevButton>;
}
