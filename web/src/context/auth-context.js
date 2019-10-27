/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useContext } from 'react'

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

function AuthProvider(props) {
  const getUser = () => {
    // get user details
    return {}
  }
  const user = getUser()
  const signin = email => {
    // post email to backend
    return { email }
  }

  const getCookie = token => {
    // validate token
    // receives user data
    return { token }
  }

  const signout = () => {
    // clear state, clear cookie
    return true
  }

  const register = (email = '', appName = '', captchaToken = {}) => {
    // post email to backend
    return { email, appName, captchaToken }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        getCookie,
        signout,
        register,
      }}
      {...props}
    />
  )
}

export { AuthProvider, useAuth, AuthContext }
