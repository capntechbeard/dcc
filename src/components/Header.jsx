import React from 'react';

const Header = props => {
  const { title } = props
  return (
    <div className="header">
      This is a header. { title }
    </div>
  )
}

export default Header
