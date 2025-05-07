import React from 'react'
import CommentList from './pages/comments'
import RecipeList from './pages/recipes'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'

function App() {

  const Navigate = useNavigate();
  return (
    <div>
      <h1>React Routing, Custom Hooks and more</h1>
      <div>
        <Link to = {'/recipe-list'} style={{marginLeft : '600px'}}>Alternative way of navigating to recipe list page</Link>
      </div>

      <button onClick = { () => Navigate('/recipe-list')} style={{background : 'black' , color : 'white' , marginRight : '50px' , marginLeft : '450px' , fontSize : '20px' , marginTop : '20px'}}>
        Navigate to Recipe List page
      </button>
      <button onClick = { () => Navigate('/comments-list')} style={{background : 'black' , color : 'white' , fontSize : '20px'}}>
        Navigate to Comments List page
      </button>
      <Routes>
        <Route path='/recipe-list' element = {<RecipeList/>} />
        <Route path='/comments-list' element = {<CommentList/>} />
      </Routes>
    </div>
  )
}

export default App