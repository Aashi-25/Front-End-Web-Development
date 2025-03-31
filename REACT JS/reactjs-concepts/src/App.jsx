import React, { useState } from 'react';  // ✅ Import useState
import './App.css'
import ClassBasedComponents from "./components/class-based-components"
// import FunctionalComponents from "./components/functional-components.jsx"
// import FunctionalComponent_2 from "./components/functional-components.jsx"

//correct way to import a default and a named export
import FunctionalComponents, {FunctionalComponent_2} from "./components/functional-components.jsx"

import ProductList from "./components/products";
import Users from './components/users/index.jsx';


const dummyProductData = ['Product1' , 'Product2' , 'Product3'];

// chain of execution :- App -> Product list(index.jsx) -> product item -> button component (eg of nested components)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React JS concepts 2025</h1>
      <ClassBasedComponents/>
      
      {/* <FunctionalComponents/>
      <FunctionalComponent_2/> */}

      {/* <ProductList dummyProductData={dummyProductData} name = "Aashi" city="Delhi"/> */}
      {/* passing props */}

      <Users/>
    </div>
  )
}

export default App
