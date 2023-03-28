import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

test("render the text as /task/ when task left is 1", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  let textData = screen.getByText(/1 task left/i);
  expect(textData).toBeInTheDocument();
});

describe("todoFooter", () => { //describe creates a block of test cases
  it("render the text as /tasks/ when tasks left more than 1", () => {
    // it or test, both are for same purpose
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    let textData = screen.getByText(/5 tasks left/i);
    expect(textData).toBeInTheDocument();
  });

  test("check whether the text is visible or not", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    let textData = screen.getByText(/5 tasks left/i);
    expect(textData).toBeVisible();
  });
});
