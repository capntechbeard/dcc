import React from 'react';
import './SelectBar.scss';

const SelectBar = props => {
  const { selectButtons } = props

  const selectButtonsNodes = selectButtons.map(selectButton => {
    return (
      <div className="select-bar__button">
        <img 
        onClick={selectButton.onClick}
        src={ selectButton.imagePath }/>
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
