import React from 'react'
import Admin from './Admin'
import Header from './Pages/Universal/Header/Header'
import Footer from './Pages/Universal/Footer/Footer'
import Login from './Pages/Login/Login'
import Events from './Pages/Event/Event'
import Blog from './Pages/Blog/Blog'

function App() {
  return (
    <div>
      <Header/>
      <Admin/>
      <Blog/>
      <Events/>
      <Login/>
       <Footer/>
    </div>
  )
}

export default App
