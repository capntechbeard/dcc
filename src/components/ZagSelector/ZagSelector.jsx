import React from 'react';
import './ZagSelector.scss';

const ZagSelector = props => {
  const { zagButtons } = props

  const zagButtonsNodes = zagButtons.map((zagButton, index) => {
    const isOdd = index % 2
    const className = `zag__button ${isOdd ? 'is-odd' : ''} ${zagButton.active ? 'active' : ''}`
    return (
      <div className={ className }>
        <img 
        onClick={zagButton.onClick}
        src={ zagButton.active ? zagButton.imagePathActive : zagButton.imagePath  }/>
      </div>
    )
  })

  return (
    <div className="zag">
      {zagButtonsNodes}
    </div>
  )
}

export default ZagSelector
