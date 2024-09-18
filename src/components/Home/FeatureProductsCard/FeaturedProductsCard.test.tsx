import React from "react";
import { render } from "@testing-library/react";
import FeaturedProductsCard from "./FeaturedProductsCard";

describe("FeaturedProductsCard component", () => {
  const product = {
    id: 1,
    name: "Producto 1",
    price: 100,
  };
  it("Should render card correctly", () => {
    const element = render(<FeaturedProductsCard product={product} />);

    expect(element).toBeTruthy();
  });

  it("Should render title correctly", () => {
    const { getAllByRole } = render(<FeaturedProductsCard product={product} />);
    
    const title = getAllByRole("paragraph");

    expect(title).toHaveLength(2);
  });
});
