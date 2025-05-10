import React from 'react'
import CommentList from './pages/comments'
import RecipeList from './pages/recipes'
import { Link, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import RecipeDetails from './pages/recipe-details';
import NotFoundPage from './pages/not-found';
import Layout from './components/layout';
import ReactHookForm from './pages/react-hook-form';
import Hooks from './pages/react-hook-form/hooks';
import UseMemoExample from './pages/UseMemo';
import UseCallback from './pages/UseCallback';

function CustomRoutes() {
  const element = useRoutes([
    {
      path : '/home', element : <Layout />,
      children : [
        {path : 'recipe-list' , element : <RecipeList/>},
        {path : 'comments-list' , element : <CommentList/>},
        {path : 'recipe-list/:id' , element : <RecipeDetails/>},
      ]
    } ,
    { 
      path: '*', element: <NotFoundPage /> 
    },
    {
      path : '/react-hook-form',
      element : <ReactHookForm/>
    },
    {
      path : "/hooks",
      element : <Hooks/>
    },
    {
      path : '/usememo',
      element : <UseMemoExample/>
    },
    {
      path : '/usecallback',
      element : <UseCallback/>
    }
  ])
  return element;
}

function App() {

  const Navigate = useNavigate();
  return (
    <div>
      {/* <h1>React Routing, Custom Hooks and more</h1>
      <div>
        <Link to={'/home/recipe-list'} style={{ marginLeft: '600px' }}>Alternative way of navigating to recipe list page</Link>
      </div>

      <button onClick={() => Navigate('/home/recipe-list')} style={{ background: 'black', color: 'white', marginRight: '50px', marginLeft: '450px', fontSize: '20px', marginTop: '20px' }}>
        Navigate to Recipe List page
      </button>
      <button onClick={() => Navigate('/home/comments-list')} style={{ background: 'black', color: 'white', fontSize: '20px' }}>
        Navigate to Comments List page
      </button> */}
      {/* <Routes>

        <Route path='/' element={<h2 style={{ textAlign: 'center' }}>Welcome! Use the links above to navigate.</h2>} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path='/home' element={<Layout />}>
          <Route path='recipe-list' element={<RecipeList />} />
          <Route path='comments-list' element={<CommentList />} />
          <Route path='recipe-list/:id' element={<RecipeDetails />} />
        </Route>

      </Routes> */}

      <CustomRoutes/>
    </div>
  )
}

export default App