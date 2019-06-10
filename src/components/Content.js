import React from 'react'
import { Container, Button, Table, Column } from 'rbx'

export default () => (
  <Container>
    <Button.Group align="centered">
      <Button color="primary">Vender productos</Button>
      <Button color="info">Crear nuevo producto</Button>
    </Button.Group>

    <Column.Group>
      <Column size="10" offset="1">
        <Table striped>
          <Table.Head>
            <Table.Row>
              <Table.Heading>#</Table.Heading>
              <Table.Heading>Nombre del producto</Table.Heading>
              <Table.Heading>Descripcion</Table.Heading>
              <Table.Heading>Precio</Table.Heading>
              <Table.Heading>Cantidad</Table.Heading>
              <Table.Heading>Categoria</Table.Heading>
              <Table.Heading>Editar</Table.Heading>
              <Table.Heading>Eliminar</Table.Heading>
            </Table.Row>
          </Table.Head>
          {/* TODO: Fetch only the last twenty entries */}
          {/* TODO: Add description */}
          <Table.Body>
            {[
              ['Producto 1', 'Descripcion del producto', 6, 887, 2],
              ['Producto 3', 'Descripcion del producto', 12, 738, 2],
              ['Producto 2', 'Descripcion del producto', 6, 623, 2],
              ['Producto 12', 'Descripcion del producto', 25, 779, 2]
            ].map(([name, description, price, quantity, category], i) => (
              <Table.Row key={i}>
                <Table.Cell>{i + 1}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell title={description}>
                  {description.substring(0, 30)}...
                </Table.Cell>
                <Table.Cell>Lps. {price}</Table.Cell>
                <Table.Cell>{quantity}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>
                  <Button color="success">Editar</Button>
                </Table.Cell>
                <Table.Cell>
                  <Button color="danger">Eliminar</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Column>
    </Column.Group>
    <Button.Group align="centered">
      <Button color="default">Ver mas productos</Button>
    </Button.Group>
  </Container>
)
