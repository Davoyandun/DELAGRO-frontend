import React from "react";
import ProductsGrid from "./ProductsGrid";
import { render } from "@testing-library/react";

describe("ProductsGrid", () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "100",
      image: "image1",
    },
    {
      id: 2,
      name: "Product 2",
      price: "200",
      image: "image2",
    },
  ];
  it("should render correctly", () => {
    const component = render(<ProductsGrid products={products} />);

    expect(component).toBeTruthy();
  });

  it("should render the correct number of products", () => {
    const component = render(<ProductsGrid products={products} />);

    expect(component.getAllByRole("img").length).toBe(2);
  });

  it("should render the correct product name", () => {
    const { getByText } = render(
      <ProductsGrid products={products.slice(0, 1)} />
    );

    const productName = getByText("Product 1");
    const productPrice = getByText("100");

    expect(productName).toBeTruthy();
    expect(productPrice).toBeTruthy();
  });
});
