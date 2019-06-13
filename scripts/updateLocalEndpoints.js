const fs = require('fs')
const { join } = require('path')
const ip = require('ip')
const dotenv = require('dotenv')

const localEnvPath = join(process.cwd(), '.env.local')

const httpEndpointKey = 'REACT_APP_HTTP_ENDPOINT'
const wsEndpointKey = 'REACT_APP_WS_ENDPOINT'

let envFileString = ''

try {
  envFileString = fs.readFileSync(localEnvPath, {
    encoding: 'utf8'
  })
} catch (e) {}

let envConfig = dotenv.parse(envFileString)

envConfig[httpEndpointKey] = `http://${ip.address()}:4000/`
envConfig[wsEndpointKey] = `ws://${ip.address()}:4000/`

let newConfig = Object.entries(envConfig).reduce(
  (prev, [key, value]) => `${prev}${key}="${value}"\n`,
  ''
)

fs.writeFileSync(localEnvPath, newConfig, { encoding: 'utf8' })
