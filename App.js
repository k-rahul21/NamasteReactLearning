import React from "react";
import ReactDOM  from "react-dom/client";

// This is how we write element in core react 👇
// React.createElement => JS Object => HTMLElement(render)
const heading = React.createElement('h1', {id: 'heading'}, 'hello from react!');

// JSX = HTML like or XML like syntax
// This is how we write element in react using JSX
// JSX (JSX code transpiled before it reaches the JS Engine) - Parcel - Babel

//  JSX => React.createElement => JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading" >Namaste React using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);