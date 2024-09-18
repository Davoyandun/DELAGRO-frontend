import React from "react";
import { render, screen } from "@testing-library/react";
import ProvidersSection from "./ProvidersSection";

describe("ProvidersSection Component", () => {
  it("should render correctly", () => {
    const { container } = render(<ProvidersSection />);

    expect(container).toBeTruthy();
  });

  it("should render title correctly", () => {
    const { getByText } = render(<ProvidersSection />);

    const title = getByText(/nuestros proveedores/i);
    
    expect(title).toBeInTheDocument();
  });

  it("should render all provider cards", () => {
    const { getAllByText } = render(<ProvidersSection />);

    const providerNames = ["FMC", "BAYER", "VERSA"];

    providerNames.forEach((name) => {
      const providerCard = getAllByText(new RegExp(name, "i"));

      expect(providerCard.length).toBeGreaterThan(0);
    });
  });
});
