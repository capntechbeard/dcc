import React from 'react';
import './Distributor.scss';

const getDistributorClasses = (customClass) => {
  return `button ${customClass}`
}

const Distributor = props => {
  const { className, cost, handleIncrement, name, value } = props;

  const classes = getDistributorClasses(className)

  return (
    <div
      className={ classes }
    >
      <button> - </button>
      <div> {value} </div>
      <button 
        id={`increment-${name}`}
        onClick={handleIncrement}
      > + </button>
      <div> {cost} </div>
    </div>

  )
}

export default Distributor
