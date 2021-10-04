import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Produto from "./Produtos";
import Filtros from "../filtros/Filtros";
import { markets, stack } from "../../resources/produtos/filtros";

const H2 = styled.h2`
  text-align: center;
  color: white;
`;

const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;

export default function ListaProdutos() {
  // eslint-disable-next-line no-unused-vars
  const [listaProdutos, setListaProdutos] = useState([]);
  const [listaFiltroMarket, setListaFiltroMarket] = useState(markets);
  const [listaFiltroStack, setListaFiltroStack] = useState(stack);

  useEffect(() => {
    const fazRequest = async () => {
      const stacks = listaFiltroStack
        .filter((stack) => stack.isChecked)
        .map((stack) => stack.value)
        .map((nome) => `stack=${nome}&`);
      const market = listaFiltroMarket
        .filter((market) => market.isChecked)
        .map((market) => market.value)
        .map((nome) => `targetMarket=${nome}&`);

      const paramsStack = stacks.length ? stacks.reduce((a, b) => a + b) : "";
      const paramsMarket = market.length ? market.reduce((a, b) => a + b) : "";

      axios.defaults.baseURL = "http://myurl";
      axios.defaults.headers.post["Content-Type"] =
        "application/json;charset=utf-8";
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      const response = await axios.get(
        `http://localhost:8080/products?${paramsMarket}${paramsStack}`
      );

      setListaProdutos(response.data);
    };

    fazRequest();
  }, [listaFiltroMarket, listaFiltroStack]);

  return (
    <>
      <H2>Produtos</H2>
      <br />
      <H2 htmlStyle="color: white;">Filtros</H2>
      <Filtros
        filtro={listaFiltroMarket}
        setState={setListaFiltroMarket}
        title="Mercados Alvos"
      />
      <Filtros
        filtro={listaFiltroStack}
        setState={setListaFiltroStack}
        title="Tecnologias"
      />
      <br />
      <br />
      <Lista>
        {listaProdutos.map((produto) => (
          <Produto key={produto.productName} produto={produto} />
        ))}
      </Lista>
    </>
  );
}
