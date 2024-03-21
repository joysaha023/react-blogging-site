import { useState } from 'react'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Bookmarks from './pages/Bookmarks'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Home></Home>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </>
  )
}

export default App
