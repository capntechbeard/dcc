import React from 'react';
import './Distributor.scss';

const getDistributorClasses = (customClass) => {
  return `distributor ${customClass}`
}

const Distributor = props => {
  const { ability, buttonClass, className, handleDecrement, handleIncrement, nextCost,
    value } = props;

  const classes = getDistributorClasses(className)

  return (
    <div
      className={ classes }>
      <div className='ability-title'>
       { ability } </div>
      <div
      className='distributor__box'>
        <button 
          className={`distributor-box__dec ${buttonClass}`}
          onClick={handleDecrement}>
          <img src='/images/svgs/button_minus.svg' />
        </button>
        <div
          className='distributor-box__value'>
          {value} 
        </div>
        <button 
          className={`distributor-box__inc ${buttonClass}`}
          onClick={handleIncrement}>
          <img src='/images/svgs/button_plus.svg' />
        </button>
        <div
          className='distributor-box__next-cost'>
          {nextCost} 
        </div>
      </div>
    </div>
  )
}

export default Distributor
