import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import domready from 'domready'

import Text from './Components/Text'

class App extends Component {
  render() {
    return (
      <div>
        <Text />
      </div>
    )
  }
}

domready(() => {
  render(
    <App />,
    document.getElementById('root')
  )
})
