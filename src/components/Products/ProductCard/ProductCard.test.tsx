import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  const product = {
    id: "1",
    name: "Product 1",
    price: "10",
    image: "image.png",
  };
  it("should render the product card", () => {
    const component = render(<ProductCard product={product} />);

    expect(component).toBeTruthy();
  });

  it("should render the product card with default image", () => {
    const { getByText } = render(<ProductCard product={product} />);

    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(product.price)).toBeInTheDocument();
  });

  it("should redirect to product detail", () => {
    const { getByRole } = render(<ProductCard product={product} />);

    const productLink = getByRole("link", { name: product.name });

    expect(productLink).toHaveAttribute("href", `/products/${product.id}`);
  });
});
