import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockFunction = jest.fn(); // this function is equal to () => {}, it creates function without a body
describe("AddInput", () => {
    it("should be able to type into input box", () => {
        render(<AddInput
                todos={[]}
                setTodos={mockFunction}
            />); //addInput component accepting two props
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, {target: {value: "Go to Shopping"}});
        expect(inputElement.value).toBe("Go to Shopping");
    })

    it("should be empty when Add button is clicked", () => {
        render(<AddInput
                todos={[]}
                setTodos={mockFunction}
            />); //addInput component accepting two props
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const addButton = screen.getByRole("button", {name: /Add/i})
        fireEvent.change(inputElement, {target: {value: "Go to Shopping"}});
        fireEvent.click(addButton) //after clicking the add button, the input box will empty i.e. the value is submitted
        expect(inputElement.value).toBe("");
    })
})