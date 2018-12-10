import React from 'react';

import './TraitSheet.scss';

const TraitSheet = props => {
  const { negativeTraitNodes, positiveTraitNodes } = props
  
  return (
    <div className="trait-sheet">
        <span>{ positiveTraitNodes }</span>
        {
          ( positiveTraitNodes.length > 0 && negativeTraitNodes.length > 0 ) &&
            <hr/>
        }
        <span>{ negativeTraitNodes }</span>
    </div>
  )
}

export default TraitSheet
