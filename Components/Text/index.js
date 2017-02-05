import React, { PropTypes } from 'react'

import translation from './translation'

export const Text = (props) => {
  const { lang } = props

  return (
    <div>
      <h1>{translation.title[lang]}</h1>
      <p>{translation.text[lang]}</p>
    </div>
  )
}

Text.propTypes = {
  lang: PropTypes.string.isRequired
}

export default Text
