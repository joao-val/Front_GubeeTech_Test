import styled from "styled-components";
import React from "react";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

export default function PageBody({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
