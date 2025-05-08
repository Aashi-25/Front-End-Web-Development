import React from 'react'
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
        <h3>This page doesn't exist.</h3>
        <Link to = "/recipe-list">Go to Recipe Lists Page</Link>
    </div>
  )
}

export default NotFoundPage;