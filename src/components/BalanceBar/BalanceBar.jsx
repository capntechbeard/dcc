import React from 'react';
import './BalanceBar.scss';

const BalanceBar = props => {
  const { negativeText, positiveText, lesser, greater} = props


  return (
    <div className="balance-bar">
      <div className="balance-bar__left">{ negativeText }</div>
      <div className="balance-bar__middle">
      
        <div className="balance-bar-middle__button">
          <button>{ greater }</button>
          <button>{ lesser }</button>
          <button>0</button>
          <button>{ lesser }</button>
          <button>{ greater }</button>
        </div>

      </div>
      <div className="balance-bar__right">{ positiveText }</div>
    </div>
  )
}

export default BalanceBar
