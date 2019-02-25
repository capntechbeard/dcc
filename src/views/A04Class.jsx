import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import SelectBar from '../components/SelectBar/SelectBar'

class AClass extends Component {

  handleNavigation = () => {
    const {navigateToPage} = this.props
    navigateToPage ('ARace')
  }
  handleBackNavigation = () => {
    const {navigateToPage} = this.props
    navigateToPage ('ACharacterTraits')
  }

  render() {


    const {handlePCClassChange, pCClass} = this.props

    const selectButtons = [
      {
        active: pCClass === 1,
        imagePathActive: '/images/svgs/warrior_active.svg',
        imagePath: '/images/svgs/warrior.svg',
        onClick: () => {
          handlePCClassChange(1);
        }
      },
      {
        active: pCClass === 2,
        imagePathActive: '/images/svgs/spiritualist_active.svg',
        imagePath: '/images/svgs/spiritualist.svg',
        onClick: () => {
          handlePCClassChange(2);
        }
      },
      {
        active: pCClass === 3,
        imagePathActive: '/images/svgs/arcanist_active.svg',
        imagePath: '/images/svgs/arcanist.svg',
        onClick: () => {
          handlePCClassChange(3);
        }
      },
      {
        active: pCClass === 4,
        imagePathActive: '/images/svgs/general_skills_active.svg',
        imagePath: '/images/svgs/general_skills.svg',
        onClick: () => {
          handlePCClassChange(4);
        }
      },

    ];

    let description = ''
    let pCClassTitle = ''
    let detailDescription = ''
    let pCClassDetail = ''
    
    if (pCClass === 1) {
      description = 'Your profession is combat, weaponry, and armors.'
      pCClassTitle = 'Warrior'
      detailDescription = '• +1 ADV per LVL'
      pCClassDetail = 'Warrior Details'
    } else if (pCClass === 2) {
      description = 'Your profession is "communicating" with and harnassing the power of the spirits that surround you and transforming them into various magical effects.'
      pCClassTitle = 'Spiritualist'
      detailDescription = '• +10% SPI Capacity per LVL'
      pCClassDetail = 'Spiritualist Details'
    } else if (pCClass === 3) {
      description = 'Your profession is harnessing the universe\'s latent magical energies and transforming them into various magical effects.'
      pCClassTitle = 'Arcanist'
      detailDescription = '• +10% ARC Capacity per LVL'
      pCClassDetail = 'Arcanist Details'
    } else if (pCClass === 4) {
      description = 'Your profession is of your own choosing. Jacks do not call themselves Jacks, but rather, they refer to themselves depending on their area of expertice. This is the class you choose should you desire to be a thief, or a bard, or any other unique profession of your choosing.'
      pCClassTitle = 'Jack'
      detailDescription = '• +1 Rank for each Jack Skill'
      pCClassDetail = 'Jack Details'
    }


    return (
      <Fragment>
        <Container>
          <Header title="Class" />

          <SelectBar selectButtons={selectButtons} />

          <div className='class-flex'>
            <div className='PCClass-text'>
              <h3>{pCClassTitle}</h3>
              <p>{description}</p>
            </div>
            <div className='PCClass-detail'>
              <h3>{pCClassDetail}</h3>
              <p>{detailDescription}</p>
            </div>
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

export default AClass;
