import React, { createContext, useContext } from 'react'

const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

function AuthProvider(props) {
  const signin = (username, password) => {
    return {}
  }

  const signout = () => {
    return true
  }

  const register = ({ email = '', password = '' }) => {
    return { email }
  }

  const requestPasswordReset = email => {
    return true
  }

  const passwordReset = (token, password, confirmPassword) => {
    return {}
  }

  return (
    <AuthContext.Provider
      value={{
        data,
        signin,
        signout,
        register,
        requestPasswordReset,
        passwordReset,
      }}
      {...props}
    />
  )
}

export { AuthProvider, useAuth, AuthContext }
