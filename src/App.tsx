import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { UserAuthProvider } from './context/authContext'
type Props = {}

function App({}: Props) {
  return (
    <UserAuthProvider>
    <RouterProvider router={router}/>
    </UserAuthProvider>
  )
}

export default App