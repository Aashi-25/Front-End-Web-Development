import React from 'react'
import CounterButton from './counter-example/counter-button';
import CounterValue from './counter-example/counter-value';
import AddNewblog from './blog-app/add-new-blog';
import BlogList from './blog-app/blog-list';

function App() {
  return (
    <div style={{textAlign : 'center' , marginTop : '10px'}}>
      <h1>Blog List App</h1>
      {/* <CounterButton/>
      <CounterValue/> */}

      <AddNewblog/>
      <BlogList/>
    </div>
  )
}

export default App;
