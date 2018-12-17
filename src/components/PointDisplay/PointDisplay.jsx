import React from 'react';
import './PointDisplay.scss';

const getPointDisplayClasses = (customClass) => {
  return `pointdisplay ${customClass}`
}

const PointDisplay = props => {
  const { className, score } = props;

  const classes = getPointDisplayClasses(className)

  return (
    <span className= { classes } >
        { score }
    </span>
  )
}

export default PointDisplay
