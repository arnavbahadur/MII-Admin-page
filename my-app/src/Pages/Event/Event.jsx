import React from 'react'
import './Event.css'

const Event = () => {
  return (
    <div>
      <div className="event-component">
        <p><i class="fa-sharp fa-solid fa-apostrophe"/>Events</p>
        <div className="add-icon" id="add-icon-event" onClick={()=>{document.getElementById('add_event_area').style.display='block'; document.getElementById('add-icon-event').innerHTML=`<i class="fa-solid fa-minus"/>`}}>
            {/* icon of add */}
            <i class="fa-solid fa-plus"/>
        </div>
        <div className="add-area add_event_area" id='add_event_area'>
            {/* html of Event to add */}        
           <p>Add new event</p>
        </div>
      </div>
      <div className="events">
        <div className="event-box">
          <div className="event-img">img</div>
          <div className="event-discription">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
          </div>
        </div>
        <div className="event-box">
          <div className="event-img">img</div>
          <div className="event-discription">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
          </div>
        </div>
        <div className="event-box">
          <div className="event-img">img</div>
          <div className="event-discription">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
          </div>
        </div>
        <div className="event-box">
          <div className="event-img">img</div>
          <div className="event-discription">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
          </div>
        </div>
        <div className="event-box">
          <div className="event-img">img</div>
          <div className="event-discription">
            <h3 className="title">Title</h3>
            <p className="blogtxt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
            <button className='delete_blog'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Event
