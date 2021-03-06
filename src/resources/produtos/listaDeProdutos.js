const produtos = [
  {
    productName: "Gubee Integrador",
    description: "Ferramenta de integração para marketplaces",
    targetMarket: [
      "Ecommerce",
      "ERP",
      "Lojista que não desejam possuir ecommerce",
    ],
    stack: ["Java 10", "Kotlin", "Kafka", "Event Stream", "Redis", "MongoDB"],
  },
  {
    productName: "Gubee Fretes",
    description: "Ferramenta para gestão e calculo de fretes",
    targetMarket: ["Ecommerce", "ERP", "Loja fisica"],
    stack: ["NodeJS", "MongoDB"],
  },
  {
    productName: "Gubee AntiFraude",
    description: "Ferramenta especialistas em detecção e prevenção à fraude",
    targetMarket: [
      "Ecommerce",
      "Telecom",
      "Venda direta",
      "Mobile First",
      "Digital Onboarding",
    ],
    stack: ["Big Data Analytics", "Hadoop", "Kafka", "Pig", "Cassandra"],
  },
];

export default produtos;
