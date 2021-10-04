import styled from "styled-components";
import React from "react";

const HeaderDiv = styled.header`
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <img
        src="https://www.gubee.com.br/assets/img/logotipo.png"
        alt="Gubee Tecnologia"
      />
    </HeaderDiv>
  );
};

export default Header;
