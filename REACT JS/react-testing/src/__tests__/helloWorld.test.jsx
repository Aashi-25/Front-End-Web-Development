import HelloWorld from "../components/HelloWorld";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

test("render hello world text" , () =>{
    const {getByText} = render(<HelloWorld/>)
    const checkHelloWorldText = getByText('Hello World');

    expect(checkHelloWorldText).toBeInTheDocument()
});