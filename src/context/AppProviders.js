import React from 'react'
import { ApolloProvider } from 'react-apollo-hooks'
import { AuthProvider } from './auth-context'
import { client } from '../apolloClient'

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </AuthProvider>
  )
}

export { AppProviders }
