import React from 'react'

const Add_blog = () => {
  return (
    <div>
       <div className="add-area add_blog_area ">
            <p>Add new Blogs</p>
            <form action="">
                <input type="text" name="blogTitle" id="" className='blogtitle' placeholder='Title'/>
                <textarea name="blog-txt" id="" cols="30" rows="10"placeholder='Write your blog' required/>
                <input type="file" name="blog-img" id="" />
                <div className="img-upload">
                  <p>Upload image :</p>
                  <label htmlFor="event-img">
                    <i class="fa-solid fa-upload"/>
                  </label>
                  <input type="file" name="event-img" id="" />
                </div>
                <button type="submit" id='blog-txt-add'>Add</button>
                <button type="reset">Clear</button>
            </form>
        </div>
    </div>
  )
}

export default Add_blog
