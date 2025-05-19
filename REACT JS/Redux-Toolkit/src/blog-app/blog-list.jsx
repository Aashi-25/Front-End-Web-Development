import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { handleDeleteBlog, handleInputChange, setBlogListOnInitialLoad, setCurrentEditedBlogId } from '../store/slices/blogSlice';

function BlogList() {

    const {blog} = useSelector(state => state);
    const {BlogList} = blog;
    console.log(BlogList);
    const dispatch = useDispatch();
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem("blogList")) || [];
        dispatch(setBlogListOnInitialLoad({BlogList : savedList}));
    }, [dispatch]);

    function onDeleteBlog(getCurrentBlogId) {
        console.log(getCurrentBlogId);
        dispatch(handleDeleteBlog({
            currentBlogId : getCurrentBlogId,
        }))
    }

    function onEditBlog(getCurrentBlog){
        dispatch(setCurrentEditedBlogId ( {
            currentBlogId : getCurrentBlog?.id,
        }))

        dispatch(handleInputChange({
        title : getCurrentBlog?.title,
        description : getCurrentBlog?.description,
    }))
    };

  return (
    <ul>
        {
            BlogList?.length > 0 ? (BlogList.map((singleBlogItem) => (
                <div style = {{border : '1px solid gray' , padding : '10px' , margin : '10px'}} key = {singleBlogItem?.id}>
                    <h3>{singleBlogItem?.title}</h3>
                    <h3>{singleBlogItem?.description}</h3>
                    <button 
                    onClick={() => onEditBlog(singleBlogItem)}
                    className='mr-5 mt-3'>Edit Blog</button>
                    <button onClick={() => onDeleteBlog(singleBlogItem?.id)}>Delete Blog</button>
                </div>
            ))) : (
                <h1>No blog added! Please add one.</h1>
            )
        }
    </ul>
  )
}

export default BlogList;