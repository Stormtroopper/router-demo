import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Github, { githubloading } from './components/Github/Github'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='user/:user_id' element={<User />} />
      <Route loader={githubloading}
        path='github'
        element={<Github />}
      />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
