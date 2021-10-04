import React, { useState } from "react";
import styled from "styled-components";
import listaFiltros from "../../resources/produtos/filtros";

const ListaFiltros = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px;
  justify-content: space-between;
  color: white;
`;

const Label = styled.label`
  color: white;
`;

const H3 = styled.h3`
  color: white;
`;

const FiltroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

export default function Filtros({ filtro, setState, title }) {
  const onClick = (checkBox) => {
    const novoFiltro = [...filtro];

    novoFiltro.forEach((item) => {
      if (checkBox.id == item.id) {
        item.isChecked = !item.isChecked;
      }
    });

    setState(novoFiltro);
  };

  return (
    <>
      <H3>{title}</H3>
      <ListaFiltros key={filtro.id}>
        {filtro.map((checkBox) => (
          <FiltroWrapper key={checkBox.id}>
            <input
              key={checkBox.id}
              name={checkBox.value}
              type="checkbox"
              checked={checkBox.isChecked}
              value={checkBox.value}
              onChange={() => onClick(checkBox)}
            />
            <Label htmlFor={checkBox.value}>{checkBox.value}</Label>
          </FiltroWrapper>
        ))}
      </ListaFiltros>
      <br />
    </>
  );
}
