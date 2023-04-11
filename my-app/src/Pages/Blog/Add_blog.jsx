import React from 'react'

const Add_blog = () => {
  return (
    <div>
       <><div className="add-area add_blog_area ">
            <p>Add new Blogs</p>
            <form action="">
                <input type="text" name="Title" id="" className='title' placeholder='Title'/>
                <textarea name="blog-txt" id="" cols="30" rows="10"placeholder='Write your blog' required/>
                <button type="submit" id='blog-txt-add'>Add</button>
                <button type="reset">Clear</button>
            </form>
        </div></>
    </div>
  )
}

export default Add_blog
