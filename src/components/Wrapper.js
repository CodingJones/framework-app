import React from "react";
import styled from "styled-components";

const WrapperLeft = styled.div`
  position: absolute;
  align-items: center;
  text-align: center;
  margin-left: 200px;
  margin-top: 180px;
`;

export default function Wrapper({ div, ...props }) {
  if (div) return <WrapperLeft {...props} />;
  return;
}
