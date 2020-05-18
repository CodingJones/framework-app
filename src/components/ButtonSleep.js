import React from "react";
import styled from "styled-components";

const SleepButton = styled.button`
  margin-top: 70px;
  padding: 15px 30px;

  color: #003e75;
  text-transform: none;

  background: #edeff1;
  border: 1px solid #d9dbdf;
  box-sizing: border-box;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  border: none;

  &:hover {
    box-shadow: 0px 2px 10px #999;
    border-radius: 40px;
  }
`;

export default function ButtonSleep(props) {
  return <SleepButton>{props.label}</SleepButton>;
}
