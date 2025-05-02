import React, { useState } from 'react';  // ✅ Import useState
import './App.css'
import ClassBasedComponents from "./components/class-based-components"
// import FunctionalComponents from "./components/functional-components.jsx"
// import FunctionalComponent_2 from "./components/functional-components.jsx"

//correct way to import a default and a named export
import FunctionalComponents, {FunctionalComponent_2} from "./components/functional-components.jsx"

import ProductList from "./components/products";
import Users from './components/users/index.jsx';
import ContextButtonComponent from './components/context-concept/button.jsx';
import ContextTextComponent from './components/context-concept/text.jsx';
import UseReducerExample from './components/user-reducer.jsx';
import FormComponent from './components/form/index.jsx';
import LoginComponent from './components/login/index.jsx';
import RegisterComponent from './components/register/index.jsx';


const dummyProductData = ['Product1' , 'Product2' , 'Product3'];

// chain of execution :- App -> Product list(index.jsx) -> product item -> button component (eg of nested components)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React JS concepts 2025</h1>
      {/* <ClassBasedComponents/> */}
      
      {/* <FunctionalComponents/>
      <FunctionalComponent_2/> */}

      {/* <ProductList dummyProductData={dummyProductData} name = "Aashi" city="Delhi"/> */}
      {/* passing props */}

      {/* <Users/> */}

      {/* <ContextButtonComponent/>
      <ContextTextComponent/> */}

      {/* <UseReducerExample /> */}

      {/* <FormComponent/> */}

      <div style = {{display : "flex" , gap : "200px" }}>
        <LoginComponent/>
        <RegisterComponent/>
      </div>
    </div>
  )
}

export default App
