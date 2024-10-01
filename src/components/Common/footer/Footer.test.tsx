import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("should render correctly", () => {
    const { container } = render(<Footer />);

    expect(container).toBeTruthy();
  });

  it("should render the copyright text", () => {
    const { getByText } = render(<Footer />);

    const copyrightText = getByText(
      /© 2024 Del @GRO. Todos los derechos reservados./i
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
