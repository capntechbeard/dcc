import React from 'react';
import './Distributor.scss';

const getDistributorClasses = (customClass) => {
  return `distributor ${customClass}`
}

const Distributor = props => {
  const { buttonClass, className, handleDecrement, handleIncrement, nextCost,
    value } = props;

  const classes = getDistributorClasses(className)

  return (
    <div
      className={ classes }>
      <button 
        className={`distributor__dec ${buttonClass}`}
        onClick={handleDecrement}>
        <img src='/images/svgs/button_minus.svg' />
      </button>
      <div
        className='distributor__value'>
        {value} 
      </div>
      <button 
        className={`distributor__inc ${buttonClass}`}
        onClick={handleIncrement}>
        <img src='/images/svgs/button_plus.svg' />
      </button>
      <div
        className='distributor__next-cost'>
        {nextCost} 
      </div>
    </div>
  )
}

export default Distributor
