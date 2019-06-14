import PropTypes from 'prop-types'
import { AUTH_TOKEN } from '../utils'

export function Auth({ children }) {
  const auth = localStorage.getItem(AUTH_TOKEN)

  return children(auth)
}

Auth.propTypes = {
  children: PropTypes.func.isRequired
}
