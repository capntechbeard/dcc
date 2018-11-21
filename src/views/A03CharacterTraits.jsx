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
    const {handleSelectedTraitCategoryChange, traits} = this.props
    const {category, categories} = traits
    const categoryData = categories[category]
    const keys = Object.keys(categoryData)
    const balanceBars = keys.map(key => {
      return (
        <BalanceBar 
          negativeText={categoryData[key].negativeText}
          positiveText={categoryData[key].positiveText}
          lesser={categoryData[key].lesser}
          greater={categoryData[key].greater} />
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
          handleSelectedTraitCategoryChange(3);
        }
      }
    ];

    const selectButtonsRight = [
      {
        active: category === 4,
        imagePathActive: '/images/svgs/personality_1_active.svg',
        imagePath: '/images/svgs/personality_1.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange(4);
        }
      },
      {
        active: category === 5,
        imagePathActive: '/images/svgs/personality_2_active.svg',
        imagePath: '/images/svgs/personality_2.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange(5);
        }
      },
      {
        active: category === 6,
        imagePathActive: '/images/svgs/personality_3_active.svg',
        imagePath: '/images/svgs/personality_3.svg',
        onClick: () => {
          handleSelectedTraitCategoryChange(6);
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
