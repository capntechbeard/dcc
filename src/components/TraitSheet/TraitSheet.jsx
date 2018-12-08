import React from 'react';
import {convertObjectToArray} from '../../lib/utility'
import './TraitSheet.scss';

const TraitSheet = props => {
  const { traits } = props
  const positiveTraits = []
  const negativeTraits = []
  const categories = convertObjectToArray (traits.categories)
  traits.positive = 0
  traits.negative = 0

  for (const category of categories) {
    const keys = Object.keys(category)
    const key = keys[0]
    const categoryTraits = convertObjectToArray(category[key])

    for (const trait of categoryTraits) {
      const traitKeys = Object.keys(trait)
      const traitKey = traitKeys[0]
      const t = trait[traitKey]
      if (t.selected > 0) {
        if (t.selected === 1){
          traits.positive = traits.positive + t.lesser
        } else if (t.selected === 2)  {
          traits.positive = traits.positive + t.greater
        }
        positiveTraits.push(
          <div className='trait-sheet__positive'>
            <img src={t.image} /> {t.positiveText}
          </div>
        )
      } else if (t.selected < 0) {
        if (t.selected === -1){
          traits.positive = traits.positive - t.lesser
        } else if (t.selected === -2)  {
          traits.positive = traits.positive - t.greater
        }
        negativeTraits.push(
          <div className='trait-sheet__negative'>
            <img src={t.image} /> {t.negativeText}
          </div>
        )
      }
    }
  }

  console.log(positiveTraits)
  console.log(negativeTraits)

  return (
    <div className="trait-sheet">
        <span>{ positiveTraits }</span>
        <hr />
        <span>{ negativeTraits }</span>
    </div>
  )
}

export default TraitSheet
