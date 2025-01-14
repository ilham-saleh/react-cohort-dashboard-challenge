import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Posts from './Components/Posts'
import { Route, Routes, Link } from 'react-router-dom';
import ViewPost from './Components/ViewPost'
import Profile from './Components/Profile'

function App() {
  const [posts, setPosts] = useState([])

  const POSTS_API = 'https://boolean-api-server.fly.dev/ilham-saleh/post'

  const getPosts = () => {
      fetch(POSTS_API)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }

  useEffect(() => {
    getPosts()
  }, [])




  return (
    <>
      <Header posts={posts}/>
      <div className="container">
         <SideBar />
      <Routes>
        <Route path='/' element={<Posts posts={posts} setPosts={setPosts} getPosts={getPosts}/>}/>
        <Route path='/post/:id' element={<ViewPost posts={posts} getPosts={getPosts}/>}/>
        <Route path="/profile" element={<Profile posts={posts}/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
