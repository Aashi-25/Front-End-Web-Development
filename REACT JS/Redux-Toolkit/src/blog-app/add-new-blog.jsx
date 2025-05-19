import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleAddToDo, handleEditBlog, handleInputChange, setCurrentEditedBlogId } from '../store/slices/blogSlice';

function AddNewblog() {

    const {blog} = useSelector(state => state);
    console.log(blog);
    const {currentEditedBlogId} = blog;
    const dispatch = useDispatch();


    function onChangeInput(event){
        dispatch(handleInputChange({
            [event.target.name] : event.target.value,
        })
    )
    }

    function handleToDoSubmit(event){
        event.preventDefault();

        if(currentEditedBlogId !== null) {
        dispatch (handleEditBlog());
        dispatch(setCurrentEditedBlogId({ currentBlogId: null })) }
        else {dispatch (handleAddToDo());}

        // dispatch(handleAddToDo());

        if(currentEditedBlogId !== null)
        dispatch(setCurrentEditedBlogId ({
            currentBlogId : null,
    }));

        dispatch(
            handleInputChange({
                title:"",
                description:""
            })
        )
    }
  return (
    <div>
        <form 
        onSubmit={handleToDoSubmit}
        className='mt-10'> 
            <div className='mb-3'>
                <label>Enter Blog Title </label>
                <input 
                type = 'text'
                name = 'title'
                placeholder='Enter Blog Title'
                id='title'
                onChange={onChangeInput}
                value={blog?.FormData?.title}
                />
            </div>
            <div>
                <label>Enter Blog Description </label>
                <input 
                type = 'text'
                name = 'description'
                placeholder='Enter Blog description'
                id='description'
                onChange={onChangeInput}
                value={blog?.FormData?.description}
                />
            </div>
            <button type='submit' className='mt-2'>
                {blog?.currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
            </button>
        </form>
    </div>
  )
}

export default AddNewblog;