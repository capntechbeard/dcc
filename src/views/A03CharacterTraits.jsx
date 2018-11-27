import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import SelectBar from '../components/SelectBar/SelectBar'
import BalanceBar from '../components/BalanceBar/BalanceBar'

class ACharacterTraits extends Component {

  constructor(props) {
    super(props)

    this.handleNavigation = this.handleNavigation.bind(this)
    this.handleBackNavigation = this.handleBackNavigation.bind(this)
  }

  handleNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('AProfession')
  }
  handleBackNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('APersonality')
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


    return (
      <Fragment>
        <Container>
          <Header title="Character Traits" />

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
            <div className='traits-wrapper__right'></div>
          </div>



          <Button 
            className="back-button"
            onClick={this.handleBackNavigation}
            text="BACK" />
          <Button 
            className="next-button"
            onClick={this.handleNavigation}
            text="NEXT" />
        </Container>
      </Fragment>
        
    );
  }
}

export default ACharacterTraits;
