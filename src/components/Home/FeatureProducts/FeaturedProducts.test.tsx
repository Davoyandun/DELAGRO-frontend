import React from "react";
import { render } from "@testing-library/react";
import FeaturedProducts from "./FeaturedProducts";

describe("FeaturedProducts component", () => {
  it("Should render all products correctly", () => {
    const { getByRole } = render(<FeaturedProducts />);
    
    const header = getByRole("heading");

    expect(header).toHaveTextContent(/Productos destacados/i);
  });

  it("Should render title correctly", () => {
    const { getAllByRole } = render(<FeaturedProducts />);

    const title = getAllByRole("img");

    expect(title).toHaveLength(8);
  });
});
