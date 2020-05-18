import React from "react";
import styled, { css } from "styled-components";
import media from "styled-media-query";

const baseStyle = css`
  font-family: "Helvetica Neue", sans-serif;
  max-width: 100%;
`;

const HeadingOne = styled.h1`
  font-size: 48px;
  text-align: center;
  font-weight: 400;
  color: #ffb236;
  margin-bottom: 20px;
  ${baseStyle};

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    font-size: 32px
  `}
`;

const HeadingTwo = styled.h2`
  font-size: 26px;
  text-align: center;
  font-weight: 400;
  color: ${(props) => (props.primary ? "#e5e5e5;" : "#003e75;")};
  margin-top: 40px;
  margin-bottom: 40px;
`;

const HeadingThree = styled.h3`
  font-size: 26px;
  color: ${(props) => (props.primary ? "#e5e5e5;" : "#003e75;")};
  text-align: center;
  margin-top: 5px;
  font-weight: 350;
  ${baseStyle};
`;

const HeadingFour = styled.h4`
  width: 400px;
  font-size: 22px;
  font-weight: 100;
  text-align: center;
  color: #e5e5e5;
  margin-bottom: 100px;
  ${baseStyle};

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    font-size: 18px;
    width: 100%;
  `}
`;

const HeadingFive = styled.h5`
  font-size: 18px;
  margin-bottom: 10px;
  color: ${(props) => (props.primary ? "#e5e5e5;" : "#003e75;")};
  font-weight: 350;
  text-align: center;
  ${baseStyle};
`;

const PageText = styled.p`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  color: ${(props) => (props.primary ? "#e5e5e5;" : "#003e75;")};
  font-style: italic;
  margin-top: 20px;
  ${baseStyle};
`;

export default function Heading({ h2, h3, h4, h5, p, ...props }) {
  if (h2) return <HeadingTwo {...props} />;
  if (h3) return <HeadingThree {...props} />;
  if (h4) return <HeadingFour {...props} />;
  if (h5) return <HeadingFive {...props} />;
  if (p) return <PageText {...props} />;
  return <HeadingOne {...props} />;
}
