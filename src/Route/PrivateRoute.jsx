import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Auth/ContextProvider'
// import { toast } from 'react-toastify'

function PrivateRoute({children}) {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
  if(loading){
    return
  }
  if(!user){
    // toast("Please SignIn First")
    return <Navigate to={'/signin'} state={location.pathname || '/'}/>
  }
  if(user){
    return children
  }
}

export default PrivateRoute