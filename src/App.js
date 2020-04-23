import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './routes/Home'
import { Login } from './routes/Login'
import { useAuth } from './context/auth-context'

function App() {
  const { token } = useAuth()

  if (!token) {
    return <Login />
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
