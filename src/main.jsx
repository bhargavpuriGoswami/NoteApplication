import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {AuthLayout, LandingPage} from './Components/'
import {Home, Login, Signup, AllNotes, EditNote, Note, AddNote} from "./Pages/"
import LoadingPage from './Pages/Loading.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element: <LandingPage />
      },
      {
        path:"/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path:"/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path:"/all-notes",
        element: (
          <AuthLayout authentication>
            <AllNotes />
          </AuthLayout>
        )
      },
      {
        path:"/add-notes",
        element: (
          <AuthLayout authentication>
            <AddNote />
          </AuthLayout>
        )
      },
      {
        path:"/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditNote />
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: <Note />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store= {store}>
     <RouterProvider router={router}/>
  </Provider>
)
