import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'
import SelectBar from '../components/SelectBar/SelectBar'

class APersonality extends Component {

  constructor(props) {
    super(props)

    this.handleNavigation = this.handleNavigation.bind(this)
    this.handleBackNavigation = this.handleBackNavigation.bind(this)
  }

  handleNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('ACharacterTraits')
  }
  handleBackNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('AAbilityScores')
  }

  render() {


    const {handlePersonalityChange, personality} = this.props

    const selectButtons = [
      {
        active: personality === 1,
        imagePath: '/images/svgs/circle.svg',
        onClick: () => {
          handlePersonalityChange(1);
        }
      },
      {
        active: personality === 2,
        imagePath: '/images/svgs/circle.svg',
        onClick: () => {
          handlePersonalityChange(2);
        }
      },
      {
        active: personality === 3,
        imagePath: '/images/svgs/circle.svg',
        onClick: () => {
          handlePersonalityChange(3);
        }
      },
      {
        active: personality === 4,
        imagePathActive: '/images/svgs/circle-active.svg',
        imagePath: '/images/svgs/circle.svg',
        onClick: () => {
          handlePersonalityChange(4);
        }
      },
      {
        active: personality === 5,
        imagePath: '/images/svgs/circle.svg',
        onClick: () => {
          handlePersonalityChange(5);
        }
      }
    ];

    let description = ''

    if (personality === 1) {
      description = 'Evil'
    } else if (personality === 2) {
      description = 'Dishonorable'
    } else if (personality === 3) {
      description = (
        <Fragment>
          <h3>Neutral</h3>
          <p>blah blah blah</p>
        </Fragment>
      )
    } else if (personality === 4) {
      description = 'Honorable'
    } else if (personality === 5) {
      description = 'Benevolent'
    }


    return (
      <Fragment>
        <Container>
          <Header title="Personality" />

          <SelectBar selectButtons={selectButtons} />

          <div className='personality-text'>{ description }</div>

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

export default APersonality;
