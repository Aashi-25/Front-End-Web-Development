import React from 'react'
import useFetch from '../../hooks/use-fetch';

function CommentList() {
    const {data , loading , error} = useFetch( 'https://dummyjson.com/comments' );
    if(loading) return <h1>Fetching recipes! Please Wait</h1>
  return (
    <div>
        <h1>Comments List</h1>
        <ul>
              {data?.comments?.length > 0 ?
                  data?.comments.map((commentItem) => (
                      <div>
                          <label>{commentItem?.body}</label>
                          <p>{commentItem.likes}</p>
                      </div>
                  ))
                  : null}
        </ul>
    </div>
  )
}

export default CommentList;