import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Stars from "../images/stars.png";
import Stars2 from "../images/stars2.png";

const StarsImg = styled.img`
  position: absolute;
  max-width: 300px;
  left: 20px;
  top: 20px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    max-width: 20%;
    left: 1%;
    top: 1%;
  `}
`;

const StarsImg2 = styled.img`
  position: absolute;
  max-width: 300px;
  right: 20px;
  top: 20px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    max-width: 20%;
    right: 1%;
    top: 1%;
  `}
`;

export default function EveningImgs() {
  return (
    <>
      <StarsImg src={Stars} alt="Stars img" />
      <StarsImg2 src={Stars2} alt="Stars2 img" />
    </>
  );
}
