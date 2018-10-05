import React from 'react';
import './Button.scss';

const getButtonClasses = (customClass) => {
  return `button ${customClass}`
}

const Button = props => {
  const { className, isDisabled, text } = props;

const classes = getButtonClasses(className)

  return (
    <button
      className={ classes }
      disabled={isDisabled}>
      { text }
    </button>

  )
}

export default Button
