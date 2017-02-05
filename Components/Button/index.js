import React, { PropTypes } from 'react'

import translation from './translation'

export const Button = (props) => {
  const { lang, ctaLang, onClick } = props

  return <button onClick={onClick}>{translation.cta[lang]} {translation[ctaLang][lang]}</button>
}

Button.propTypes = {
  lang: PropTypes.string.isRequired,
  ctaLang: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
