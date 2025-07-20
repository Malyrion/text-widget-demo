import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button color variants", () => {
  it("applies blue color by default", () => {
    render(<Button buttonText="Blue" onPress={() => {}} />);
    const btn = screen.getByText("Blue");
    expect(btn.className).toContain("bg-blue-600");
  });

  it("applies red color when passed", () => {
    render(<Button buttonText="Red" onPress={() => {}} color="red" />);
    const btn = screen.getByText("Red");
    expect(btn.className).toContain("bg-red-600");
  });

  it("applies green color when passed", () => {
    render(<Button buttonText="Green" onPress={() => {}} color="green" />);
    const btn = screen.getByText("Green");
    expect(btn.className).toContain("bg-green-600");
  });
});
