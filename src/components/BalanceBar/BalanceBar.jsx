import React from 'react';
import './BalanceBar.scss';

const BalanceBar = props => {
  const { handleTraitSelection, negativeText, positiveText, lesser, greater, selected,
    traitKey } = props

  return (
    <div className="balance-bar">
      <div className="balance-bar__left">{ negativeText }</div>
      <div className="balance-bar__middle">
      
        <div className="balance-bar-middle__button">
          <button 
            className={selected === -2 ? 'selected' : ''}
            onClick={() => handleTraitSelection(traitKey, -2)}>
            { greater }
          </button>
          <button 
            className={selected === -1 ? 'selected' : ''}
            onClick={() => handleTraitSelection(traitKey, -1)}>
            { lesser }
          </button>
          <button 
            className={selected === 0 ? 'selected' : ''}
            onClick={() => handleTraitSelection(traitKey, 0)}>
            0
          </button>
          <button 
            className={selected === 1 ? 'selected' : ''}
            onClick={() => handleTraitSelection(traitKey, 1)}>
            { lesser }
          </button>
          <button 
            className={selected === 2 ? 'selected' : ''}
            onClick={() => handleTraitSelection(traitKey, 2)}>
            { greater }
          </button>
        </div>

      </div>
      <div className="balance-bar__right">{ positiveText }</div>
    </div>
  )
}

export default BalanceBar
