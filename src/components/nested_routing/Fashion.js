import React from "react";
import { faker } from "@faker-js/faker";

const Fashion = () => {
  const productsArray = [...Array(8)].map(() => ({
    id: faker.string.uuid(),
    name: faker.person.jobTitle(),
    Title: faker.person.jobType(),
    image: faker.image.urlLoremFlickr({ category: "fashion" }),
  }));
  return (
    <div className="flex flex-wrap gap-10 mt-10 ml-12">
      {productsArray.map((product) => (
        <div
          key={product.id}
          className="border border-white rounded h-80 w-80 pl-4 pt-4 bg-slate-100"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-52 w-72  rounded-xl"
          />
          <div className="flex justify-between ">
            <div className="mt-5">
              <h3 className="text-lg">{product.name}</h3>
              <p>Type: {product.Type}</p>
            </div>
            <button className="bg-sky-600  h-8 mt-6 mr-4 rounded p-1 text-white text-lg">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fashion;
