import React from 'react';
import './AbilityPoints.scss';

const getAbilityPointsClasses = (customClass) => {
  return `abilitypoints ${customClass}`
}

const AbilityPoints = props => {
  const { className, score } = props;

  const classes = getAbilityPointsClasses(className)

  return (
    <div className= { classes } >
      <div className='score'>
        { score }
      </div>
      <div className='text'>
          Remaining
      </div>
    </div>
  )
}

export default AbilityPoints
