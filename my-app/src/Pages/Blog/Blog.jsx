import React from 'react'
import './Blog.css'

const Blog = () => {

  return (
    <div>
      <div className="blog-component">
        <p>Blogs</p>
        <div className="add-icon" id='add-icon-blog' onClick={()=>{document.getElementById('add_blog_area').style.display='block'; document.getElementById('add-icon-blog').innerHTML=`<i class="fa-solid fa-minus"/>`}}>
            {/* icon of add */}
            <i class="fa-solid fa-plus"/>
        </div>
        <div className="add-area add_blog_area" id='add_blog_area'>
            {/* html of blog to add */}        
            <p>Add new Blogs</p>
            <form action="">
                <input type="text" name="Title" id="" className='title' placeholder='Title'/>
                <textarea name="blog-txt" id="" cols="30" rows="10"placeholder='Write your blog' required/>
                {/* add img upload option */}
                <button type="submit" id='blog-txt-add'>Add</button>
                <button type="reset">Clear</button>
            </form>
        </div>
      </div>
      <div className="blogs">
        <div className="blog-box">
          <div className="blog-img">
            Img
          </div>
          <div className="blog-content">
            <div className="row1">
              <h3 className="title">Title</h3>
              <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            </div>
            <div className='row-2'>
              <span className="publisher">XYZ</span> 
              <span className="date">10/4/2023</span>
            </div>
            <div className="btn-section row-3">          
              <button className='delete_blog'>Delete</button>
            </div> 
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            Img
          </div>
          <div className="blog-content">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            Img
          </div>
          <div className="blog-content">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            Img
          </div>
          <div className="blog-content">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            Img
          </div>
          <div className="blog-content">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <div className="btn-section">          
              <button className='delete_blog'>Delete</button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
