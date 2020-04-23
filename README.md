# Inventory App

An example of an inventory app to administrate small business built with react & electron.

# Getting started

### Prerequisites

- Node >= 8
- Yarn
- Install the graphql-yoga server [from here.][1]

### Installing

```sh
$ git clone https://github.com/cesaraaron/inventory-app
$ cd inventory-app
$ yarn install
```

# Development

Create an `.env.local` file in the root of the project pointing to where the graphql-yoga server is running, by default it is:

```
REACT_APP_HTTP_ENDPOINT=http://localhost:4000/
REACT_APP_WS_ENDPOINT=ws://localhost:4000/
```

# License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details

[1]: https://github.com/cesaraaron/inventory-app-server
