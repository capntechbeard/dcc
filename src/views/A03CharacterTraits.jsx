import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import SelectBar from '../components/SelectBar/SelectBar'
import BalanceBar from '../components/BalanceBar/BalanceBar'
import TraitSheet from '../components/TraitSheet/TraitSheet'
import PointDisplay from '../components/PointDisplay/PointDisplay'
import {convertObjectToArray} from '../lib/utility'

class ACharacterTraits extends Component {


  handleNavigation = () => {
    const {navigateToPage} = this.props
    navigateToPage ('AClass')
  }

  handleBackNavigation = () => {
    const {navigateToPage} = this.props
    navigateToPage ('APersonality')
  }

  createTraitSheetNodes = () => {
    const {traits} = this.props
    const positiveTraitNodes = []
    const negativeTraitNodes = []
    const categories = convertObjectToArray (traits.categories)
    let total = 0
    let totalNegative = 0
    let totalPositive = 0
  
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
            total = total + t.lesser
            totalPositive = totalPositive + t.lesser
          } else if (t.selected === 2)  {
            total = total + t.greater
            totalPositive = totalPositive + t.greater
          }
          positiveTraitNodes.push(
            <div className='trait-sheet__positive'>
              <img src={t.image} /> {t.positiveText} {t.selected === 1 ? '(L)' : '(G)'}
            </div>
          )
        } else if (t.selected < 0) {
          if (t.selected === -1){
            total = total - t.lesser
            totalNegative = totalNegative - t.lesser
          } else if (t.selected === -2)  {
            total = total - t.greater
            totalNegative = totalNegative - t.greater
          }
          negativeTraitNodes.push(
            <div className='trait-sheet__negative'>
              <img src={t.image} /> {t.negativeText} {t.selected === -1 ? '(L)' : '(G)'}
            </div>
          )
        }
      }
    }

    return {negativeTraitNodes, positiveTraitNodes, total, totalNegative, totalPositive}
  }

  render() {
    const {handleSelectedTraitCategoryChange, handleTraitSelection, traits} = this.props
    const {category, categories} = traits
    const categoryData = categories[category]
    const keys = Object.keys(categoryData)
    const balanceBars = keys.map(key => {
      return (
        <BalanceBar 
          handleTraitSelection={handleTraitSelection}
          negativeText={categoryData[key].negativeText}
          positiveText={categoryData[key].positiveText}
          lesser={categoryData[key].lesser}
          greater={categoryData[key].greater}
          selected={categoryData[key].selected}
          traitKey={key} />
      )
    })

    const selectButtonsLeft = [
      {
        active: category === 'warrior',
        imagePathActive: '/images/svgs/warrior_active.svg',
        imagePath: '/images/svgs/warrior.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange('warrior');
        }
      },
      {
        active: category === 'spiritualist',
        imagePathActive: '/images/svgs/spiritualist_active.svg',
        imagePath: '/images/svgs/spiritualist.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange('spiritualist');
        }
      },
      {
        active: category === 'arcanist',
        imagePathActive: '/images/svgs/arcanist_active.svg',
        imagePath: '/images/svgs/arcanist.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange('arcanist');
        }
      }
    ];

    const selectButtonsRight = [
      {
        active: category === 'body',
        imagePathActive: '/images/svgs/body_trait_active.svg',
        imagePath: '/images/svgs/body_trait.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange('body');
        }
      },
      {
        active: category === 'personality',
        imagePathActive: '/images/svgs/personality_trait_active.svg',
        imagePath: '/images/svgs/personality_trait.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange('personality');
        }
      },
      {
        active: category === 'natural',
        imagePathActive: '/images/svgs/general_skills_active.svg',
        imagePath: '/images/svgs/general_skills.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange('natural');
        }
      }
    ];

    const {negativeTraitNodes, positiveTraitNodes, total, totalNegative, totalPositive} = this.createTraitSheetNodes()

    return (
      <Fragment>
        <Container>
          <Header title="Character Traits" />
          <div className="text-align-center">
          <div className='traits-wrapper'>
            <div className='traits-wrapper__left'>
              <div className='traits-wrapper-left__top'>
                <SelectBar selectButtons={selectButtonsLeft}/>
                <SelectBar selectButtons={selectButtonsRight}/>
              </div>
              <div className='traits-wrapper-left__bottom'>

              {balanceBars}

              </div>
            </div>
            <div className='traits-wrapper__right'>
              <TraitSheet 
                negativeTraitNodes={negativeTraitNodes}
                positiveTraitNodes={positiveTraitNodes} />
            </div>
          </div>
          <PointDisplay 
              className="a03-negative-score"
              score={totalNegative}/>
            <PointDisplay 
              className="a03-total-score"
              score={total}/>
            <PointDisplay 
              className="a03-positive-score"
              score={totalPositive}/>
          



          <Button 
            className="back-button"
            onClick={this.handleBackNavigation}
            text="BACK" />

          

          <Button 
            className="next-button"
            isDisabled={total !== 0}
            onClick={this.handleNavigation}
            text="NEXT" />
            </div>
        </Container>
      </Fragment>
        
    );
  }
}

export default ACharacterTraits;
