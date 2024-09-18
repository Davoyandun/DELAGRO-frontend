import React from "react";
import { render } from "@testing-library/react";
import HeroSection from "./HeroSection";
describe("HeroSection Component", () => {
  it("should render correctly", () => {
    const { container } = render(<HeroSection />);

    expect(container).toBeTruthy();
  });

  it("should render title correctly", () => {
    const { getByText } = render(<HeroSection />);

    const title = getByText(/agroquímicos y fertilizantes/i);

    expect(title).toBeInTheDocument();
  });

  it("should render subtitle correctly", () => {
    const { getByText } = render(<HeroSection />);

    const subtitle = getByText(/distribuciones y servicios para el agro/i);
    
    expect(subtitle).toBeInTheDocument();
  });
});
