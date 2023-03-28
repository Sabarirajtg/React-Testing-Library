import { render, screen } from '@testing-library/react';
import Header from '../Header';


test("renders the header with props title", () =>{
    render(<Header title="my header"/>);
    let titleData = screen.getByText("my header");
    expect(titleData).toBeInTheDocument();
})


// test("renders the header tag or not", () =>{
//     render(<Header title="my header"/>);
//     let titleData = screen.getByRole("heading", {name: "Hello"});
//     expect(titleData).toBeInTheDocument();
// })

test("renders the header with props title", () =>{
    render(<Header title="my header"/>);
    let titleData = screen.queryByText("cockroach");
    expect(titleData).not.toBeInTheDocument();
})
