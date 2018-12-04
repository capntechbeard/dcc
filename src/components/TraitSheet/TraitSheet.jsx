import React from 'react';
import {convertObjectToArray} from '../../lib/utility'
import './TraitSheet.scss';

const TraitSheet = props => {
  const { traits } = props
  const positiveTraits = []
  const negativeTraits = []
  const categories = convertObjectToArray (traits.categories)

  for (const category of categories) {
    const keys = Object.keys(category)
    const key = keys[0]
    const categoryTraits = convertObjectToArray(category[key])

    for (const trait of categoryTraits) {
      const traitKeys = Object.keys(trait)
      const traitKey = traitKeys[0]
      const t = trait[traitKey]
      if (t.selected > 0) {
        positiveTraits.push(
          <div className='trait-sheet__positive'>
            <img src='' /> {t.positiveText}
          </div>
        )
      } else if (t.selected < 0) {
        negativeTraits.push(
          <div className='trait-sheet__negative'>
            {t.positiveText}
          </div>
        )
      }
    }
  }

  console.log(positiveTraits)
  console.log(negativeTraits)

  return (
    <div className="trait-sheet">
        { positiveTraits }
        <hr />
        { negativeTraits }
    </div>
  )
}

export default TraitSheet
