import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe() ==> is used to group multiple test cases into single block
// It is optional, but it is a good practice to use it
describe("Contact test cases", () => {
  // beforeAll
  // beforeAll(() => {
  //   console.log("Before All the test function this will get called");
  // });

  // beforeEach(() => {
  //   console.log("Before each test it will run");
  // });

  // afterAll(() => {
  //   console.log("it will run afterAll");
  // });

  // afterEach(() => {
  //   console.log("it will run after each");
  // });

  test("Should load Contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside Contact Component", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  //   test("Should load 2 input fields inside Contact Component", () => {
  //     render(<Contact />);

  //     // Querying
  //     const inputBoxes = screen.getAllByRole("textbox"); // This will select all input fields, for input "textbox" is the role
  //     //   console.log(inputBoxes[0]);
  //     console.log(inputBoxes.length);
  //     //Assertion
  //   });

  // Using it() instead of test() is just a matter of preference, both are same
  it("Should load 2 input fields inside Contact Component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox"); // This will select all input fields, for input "textbox" is the role
    //   console.log(inputBoxes[0]);
    // console.log(inputBoxes.length);
    //Assertion
  });
});
