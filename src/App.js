import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import ApolloClient, { split, HttpLink, InMemoryCache } from 'apollo-boost'
import { AUTH_TOKEN } from './utils'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import { setContext } from 'apollo-link-context'
import { ApolloProvider } from 'react-apollo-hooks'

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
  link: authLink.concat(link),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Content />
    </ApolloProvider>
  )
}

export default App
