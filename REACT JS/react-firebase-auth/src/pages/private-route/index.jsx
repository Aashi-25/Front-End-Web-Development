import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context';

function AuthPage({children}) {
  const {user , loading} = useContext(AuthContext);

  if(loading) return <h1>Loading! Please wait</h1>

  if (user) return children;
  return (
    <Navigate to = {"/login"} />
  )
}

export default AuthPage;