import React, { useState } from 'react'
import {
  Column,
  Container,
  Card,
  Content,
  Field,
  Control,
  Input,
  Label,
  Button
} from 'rbx'
import { useMutation } from 'react-apollo-hooks'
import gql from 'graphql-tag'
import { useAuth } from '../context/auth-context'

const LOGIN_MUTATION = gql`
  mutation login($phoneNumber: String!, $password: String!) {
    login(phoneNumber: $phoneNumber, password: $password) {
      token
    }
  }
`

export function Login() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const loginMutation = useMutation(LOGIN_MUTATION, {
    variables: {
      phoneNumber,
      password
    }
  })

  return (
    <Container style={{ paddingTop: '100px' }}>
      <Column.Group>
        <Column size="6" offset="3" mobile={{ size: '10', offset: '1' }}>
          <Card>
            <Card.Header></Card.Header>
            <Card.Content>
              <Content>
                <Field>
                  <Label>Numero de cuenta</Label>
                  <Control>
                    <Input
                      type="text"
                      placeholder="O numero de telefono"
                      value={phoneNumber}
                      onChange={e => setPhoneNumber(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Label>Contraseña</Label>
                  <Control>
                    <Input
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </Control>
                </Field>
                <Field>
                  <Button.Group>
                    <Button
                      color="primary"
                      onClick={() => {
                        loginMutation().then(({ data }) => {
                          login(data.login.token)
                        })
                      }}
                    >
                      Iniciar sesion
                    </Button>
                  </Button.Group>
                </Field>
              </Content>
            </Card.Content>
            {/* <Card.Footer>
              <Card.Footer.Item as="a" href="#">
                Save
              </Card.Footer.Item>
              <Card.Footer.Item as="a" href="#">
                Edit
              </Card.Footer.Item>
              <Card.Footer.Item as="a" href="#">
                Delete
              </Card.Footer.Item>
            </Card.Footer> */}
          </Card>
        </Column>
      </Column.Group>
    </Container>
  )
}
