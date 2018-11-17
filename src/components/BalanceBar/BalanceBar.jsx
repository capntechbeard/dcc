import React from 'react';
import './BalanceBar.scss';

const BalanceBar = props => {
  const { selectButtons } = props



  return (
    <div className="balance-bar">
      <div className="balance-bar__left">_____</div>
      <div className="balance-bar__middle">
      
        <div className="balance-bar-middle__button">
          <img 
          onClick={()=> console.log("boop")}
          src="/images/svgs/circle.svg"/>
        </div>

      </div>
      <div className="balance-bar__right">+++++</div>
    </div>
  )
}

export default BalanceBar
