import React, { PropTypes, Component } from 'react'
import { render } from 'react-dom'
import domready from 'domready'

import Text from './Components/Text'
import Button from './Components/Button'

class App extends Component {
  constructor() {
    super()
    this.state = { lang: 'en' }
  }

  handleClick(lang) {
    this.setState({ lang })
  }

  render() {
    const { lang } = this.state

    return (
      <div>
        <Text lang={lang} />

        <div>
          <Button lang={lang} ctaLang='english' onClick={() => this.handleClick('en')} />
          <Button lang={lang} ctaLang='danish' onClick={() => this.handleClick('dk')} />
          <Button lang={lang} ctaLang='french' onClick={() => this.handleClick('fr')} />
        </div>
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
