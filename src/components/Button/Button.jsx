import React from 'react';
import './Button.scss';

const getButtonClasses = (customClass) => {
  return `button ${customClass}`
}

const Button = props => {
  const { className, isDisabled, onClick, text } = props;

const classes = getButtonClasses(className)

  return (
    <button
      className={ classes }
      disabled={isDisabled}
      onClick={onClick}>
      { text }
    </button>

  )
}

export default Button
