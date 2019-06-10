import React from 'react'
import { Navbar, Container } from 'rbx'

export default () => (
  <Navbar>
    <Container>
      <Navbar.Brand>
        <Navbar.Item>Gerencia de inventario</Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align="end">
          <Navbar.Item>Salir</Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Container>
  </Navbar>
)
