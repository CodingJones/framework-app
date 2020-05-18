import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import Sun from "../images/sun.png";
import Sun2 from "../images/sun2.png";

const SunImg = styled.img`
  position: absolute;
  max-width: 350px;
  left: 20px;
  top: 20px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    max-width: 25%;
    left: 1%;
    top: 1%;
  `}
`;

const SunImg2 = styled.img`
  position: absolute;
  max-width: 300px;
  right: 20px;
  top: 40px;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    max-width: 25%;
    right: 1%;
    top: 1%;
  `}
`;

export default function SunImgs() {
  return (
    <>
      <SunImg src={Sun} alt="Sun img" />
      <SunImg2 src={Sun2} alt="Sun2 img" />
    </>
  );
}
