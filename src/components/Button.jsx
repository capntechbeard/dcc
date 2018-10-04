import React from 'react';

const Button = props => {
  const { title } = props
  return (
    <div className="button">
      This is a button { title }
    </div>
  )
}

export default Button
