import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";
import { pages } from "../Routes";

describe("Header component", () => {
  it("Should  render title and subtitle correctly", () => {
    const { getByText, getAllByText } = render(<Header />);
    const title = getAllByText(/Del @GRO/i);
    const subtitle = getByText(/Distribuciones y servicios para el agro/i);
    expect(title).toHaveLength(2);
    expect(subtitle).toBeInTheDocument();
  });

  it("Should render all nav buttons correctly", () => {
    const { getAllByRole } = render(<Header />);
    const navButtons = getAllByRole("button");
    expect(navButtons).toHaveLength(5);
  });
});
