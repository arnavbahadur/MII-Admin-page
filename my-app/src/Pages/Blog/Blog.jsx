import React from 'react'
import Add_blog from './Add_blog';
import './Blog.css'
import { useState } from 'react'

const Blog = () => {
const [openform,setopenform]=useState(false);
  return (
    <div>
      <div className="blog-component">
        <p>Blogs</p>
        <div className="add-icon" id='add-icon-blog' onClick={()=>{setopenform(!openform)}}>
            {/* icon of add */}
            <i class="fa-solid fa-plus"/>
        </div>

        {openform?<Add_blog/>:<></>}
        <div className="blogs">
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
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
                <button className='delete-btn'>Delete</button>
              </div> 
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
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
                <button className='delete-btn'>Delete</button>
              </div> 
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
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
                <button className='delete-btn'>Delete</button>
              </div> 
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
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
                <button className='delete-btn'>Delete</button>
              </div> 
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img src="https://cdn.pixabay.com/photo/2017/01/18/08/25/social-media-1989152__480.jpg" alt="blog1" />
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
                <button className='delete-btn'>Delete</button>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
