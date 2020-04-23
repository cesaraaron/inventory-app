import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { AUTH_TOKEN } from '../utils'

const AuthContext = React.createContext()
const savedToken = localStorage.getItem(AUTH_TOKEN)

function AuthProvider(props) {
  const [token, setToken] = useState(savedToken)
  const login = token => {
    localStorage.setItem(AUTH_TOKEN, token)
    setToken(token)
  }

  const logout = () => {
    localStorage.setItem(AUTH_TOKEN, '')
    setToken('')
  }

  return <AuthContext.Provider value={{ login, logout, token }} {...props} />
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
