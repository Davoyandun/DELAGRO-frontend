import ButtonUsage from "./buttonExample";
import { render } from "@testing-library/react";
describe("ButtonUsage", () => {
  it("should render the button", () => {
    const { getByText } = render(<ButtonUsage />);
    expect(getByText("Hello world")).toBeInTheDocument();
  });
});
