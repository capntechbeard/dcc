import React from 'react';
import './Header.scss';

const Header = props => {
  const { title } = props
  return (
    <div className="header">
      <h1>{ title }</h1>
    </div>
  )
}

export default Header
