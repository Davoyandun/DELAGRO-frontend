import React from "react";
import { render, screen } from "@testing-library/react";
import ProvidersSectionCard from "./ProvidersSectionCard";

describe("ProvidersSectionCard Component", () => {
  const provider = {
    name: "FMC",
    imageUrl: "https://s3-symbol-logo.tradingview.com/fmc--600.png",
  };

  it("should render correctly", () => {
    const { container } = render(<ProvidersSectionCard provider={provider} />);

    expect(container).toBeTruthy();
  });

  it("should render provider name correctly", () => {
    const { getByText } = render(<ProvidersSectionCard provider={provider} />);

    const providerName = getByText(/FMC/i);
    
    expect(providerName).toBeInTheDocument();
  });
});
