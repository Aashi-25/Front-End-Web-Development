import React from 'react'

function AddNewblog() {
  return (
    <div>
        <form className='mt-10'> 
            <div className='mb-3'>
                <label>Enter Blog Title </label>
                <input 
                type = 'text'
                name = 'title'
                placeholder='Enter Blog Title'
                id='title'
                />
            </div>
            <div>
                <label>Enter Blog Description </label>
                <input 
                type = 'text'
                name = 'description'
                placeholder='Enter Blog description'
                id='description'
                />
            </div>
            <button type='submit' className='mt-2'>Add New Blog </button>
        </form>
    </div>
  )
}

export default AddNewblog