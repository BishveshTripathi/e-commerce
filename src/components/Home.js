import React from "react";
import { faker } from "@faker-js/faker";

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    price: faker.commerce.price(),
    image: faker.image.avatar(),
  }));

  console.log(productsArray);
  return <div className="">Home page</div>;
};

export default Home;
