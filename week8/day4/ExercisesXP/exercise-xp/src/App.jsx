import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, NavLink, Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Profile } from './components/Profile';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { Nav } from './components/Nav';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PostList } from './components/PostList';
import { Example1 } from './components/Example1';
import { Example2 } from './components/Example2';
import { Example3 } from './components/Example3';
import { useEffect } from 'react';

function App() {

const Root = () => {
  return (<>
  <Nav />
  <Outlet />
  </>)
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorBoundary />,
      }, 
      {
        path: '/profile',
        element: <Profile />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '/shop',
        element: <Shop />,
        errorElement: <ErrorBoundary />,
      }
    ]
  }
])


const fetchingWebHook = async () => {
  const postData = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    }
    const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify( postData )
  }
  try {
    const response = await fetch('https://webhook.site/49569080-e5c8-4cde-8c7c-36a1ee7097c9', options)
    console.log(response);
    
  } catch (error) {
    console.log(error);
  }

    
  }



  return (
    <>
      <RouterProvider router={router} />
      <button onClick={() => fetchingWebHook()} >Post to Webhook.site</button>
      {/* <PostList /> */}
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      <Example3 />

    </>
  )
}

export default App
