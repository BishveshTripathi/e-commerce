import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Registerbtn from "./components/Registerbtn";
import Grocery from "./components/nested_routing/Grocery";
import Mobile from "./components/nested_routing/Mobile";
import Fashion from "./components/nested_routing/Fashion";
import Electronic from "./components/nested_routing/Electronic";
import Furniture from "./components/nested_routing/Furniture";
import Appliances from "./components/nested_routing/Appliances";
import Beauty from "./components/nested_routing/Beauty";
import Travel from "./components/nested_routing/Travel";
import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import CartPage from "./components/Cart";

const generateProductList = () => {
  const productsArray = [...Array(8)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: "food" }),
  }));
  return productsArray;
};
function App() {
  const [productList, setProductList] = useState();

  useEffect(() => {
    setProductList(generateProductList());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact>
            <Route
              path="/grocery"
              element={<Grocery productList={productList} />}
            />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/electronic" element={<Electronic />} />
            <Route path="/furniture" element={<Furniture />} />
            <Route path="/appliances" element={<Appliances />} />
            <Route path="/beauty&toys" element={<Beauty />} />
            <Route path="/travel" element={<Travel />} />
          </Route>
          <Route
            path="/cart"
            element={<CartPage productList={productList} />}
          />
          <Route path="/register" element={<Registerbtn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
