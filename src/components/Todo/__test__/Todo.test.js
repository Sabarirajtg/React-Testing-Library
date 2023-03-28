import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  //to overcome router issue
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const addButton = screen.getByRole("button", { name: /add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(addButton);
  });
};

describe("Todo", () => {
  it("Should render a task in task list after add is clicked", () => {
    render(<MockTodo />);
    addTask(["charge my phone"]);
    const divElement = screen.getByText(/Charge my phone/i);
    expect(divElement).toBeInTheDocument();
  });

  it("Should render multiple tasks in task list after each add button is clicked", () => {
    render(<MockTodo />);
    addTask(["charge my phone", "watch series", "play a game"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("Should not have Strikethrough when task initially added", () => {
    render(<MockTodo />);
    addTask(["charge my phone"]);
    const divElement = screen.getByText(/Charge my phone/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("Should have Strikethrough when task is clicked", () => {
    render(<MockTodo />);
    addTask(["charge my phone"]);
    const divElement = screen.getByText(/Charge my phone/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
