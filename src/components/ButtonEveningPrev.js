import React from "react";
import styled from "styled-components";

const PrevButton = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px 30px;
  color: #edeff1;
  text-transform: none;
  background: #003e75;
  border: none;
`;

export default function ButtonEveningPrev(props) {
  return <PrevButton>{props.label}</PrevButton>;
}
