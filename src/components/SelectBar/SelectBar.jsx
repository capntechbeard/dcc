import React from 'react';
import './SelectBar.scss';

const SelectBar = props => {
  const { selectButtons } = props

  const selectButtonsNodes = selectButtons.map(selectButton => {
    const className=`select-bar__button ${selectButton.active ? 'active' : ''}`
    return (
      <div className={ className }>
        <img 
        onClick={selectButton.onClick}
        src={ selectButton.active ? selectButton.imagePathActive : selectButton.imagePath  }/>
      </div>
    )
  })

  return (
    <div className="select-bar">
      {selectButtonsNodes}
    </div>
  )
}

export default SelectBar
