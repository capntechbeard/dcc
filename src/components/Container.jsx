import React from 'react';

const Container = props => {
  const { title } = props
  return (
    <div className="container">
      Homestarrunner.net { title }
    </div>
  )
}

export default Container
