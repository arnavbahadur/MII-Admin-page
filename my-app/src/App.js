import React from 'react'
import Admin from './Admin'
import Header from './Pages/Universal/Header/Header'
import Footer from './Pages/Universal/Footer/Footer'
import Blog from './Pages/Blog/Blog'
function App() {
  return (
    <div>
      <Header/>
      {/* <Admin/> */}
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
