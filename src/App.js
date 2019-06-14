import React from 'react'
import { Home } from './routes/Home'
import { AUTH_TOKEN } from './utils'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { setContext } from 'apollo-link-context'
import { ApolloProvider } from 'react-apollo-hooks'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './routes/Login'

const { REACT_APP_HTTP_ENDPOINT, REACT_APP_WS_ENDPOINT } = process.env

const wsLink = new WebSocketLink({
  uri: REACT_APP_WS_ENDPOINT,
  options: {
    reconnect: true
  }
})

const httpLink = new HttpLink({
  uri: REACT_APP_HTTP_ENDPOINT,
  credentials: 'same-origin'
})

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(AUTH_TOKEN)

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([authLink, link]),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
