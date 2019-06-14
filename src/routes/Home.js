import React from 'react'
import { Header } from '../components/Header'
import { Content } from '../components/Content'
import { Redirect } from 'react-router-dom'
import { AUTH_TOKEN } from '../utils'

export function Home() {
  const isAuth = localStorage.getItem(AUTH_TOKEN)

  if (!isAuth) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <Content />
    </>
  )
}
