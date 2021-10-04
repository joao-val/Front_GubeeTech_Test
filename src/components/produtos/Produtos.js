import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  heigth: 100%;
  width: 300px;
  background: #d8bbec;
  border-radius: 5px 20px 5px 20px;
  box-shadow: 1px 2px 3px -1px #ffffff;
  color: #3c0754;
  padding: 10px;
  margin-bottom: 15px;
`;

const H3 = styled.h3`
  margin: 10px 0;
`;

const H4 = styled.h4`
  margin: 10px 0;
  font-weight: bold;
`;

const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline-start: 0px;
  list-style-type: none;
  margin: 0;
  margin-right: 5px;
`;

const Text = styled.p``;

const Item = styled.li``;

const Produto = ({ produto }) => (
  <Wrapper key={produto.productName}>
    <H3>{produto.productName}</H3>
    <Text>{produto.description}</Text>
    <H4>Mercado{produto.targetMarket.length ? "s" : ""} Alvos:</H4>
    <Lista>
      {produto.targetMarket.map((target) => (
        <Item key={target}>{target}</Item>
      ))}
    </Lista>
    <H4>Stack{produto.stack.length ? "s" : ""}:</H4>
    <Lista>
      {produto.stack.map((stack) => (
        <Item key={stack}>{stack}</Item>
      ))}
    </Lista>
  </Wrapper>
);

export default Produto;
