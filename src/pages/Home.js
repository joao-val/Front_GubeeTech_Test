import React from "react";
import PageBody from "../components/Body";
import Header from "../components/Header";
import ListaProdutos from "../components/produtos/ListaProdutos";

const Home = () => {
  return (
    <PageBody>
      <Header />
      <ListaProdutos />
    </PageBody>
  );
};

export default Home;
