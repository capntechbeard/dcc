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
        imagePathActive: '/images/svgs/personality_1_active.svg',
        imagePath: '/images/svgs/personality_1.svg',
        onClick: () => {
          handlePersonalityChange(1);
        }
      },
      {
        active: personality === 2,
        imagePathActive: '/images/svgs/personality_2_active.svg',
        imagePath: '/images/svgs/personality_2.svg',
        onClick: () => {
          handlePersonalityChange(2);
        }
      },
      {
        active: personality === 3,
        imagePathActive: '/images/svgs/personality_3_active.svg',
        imagePath: '/images/svgs/personality_3.svg',
        onClick: () => {
          handlePersonalityChange(3);
        }
      },
      {
        active: personality === 4,
        imagePathActive: '/images/svgs/personality_4_active.svg',
        imagePath: '/images/svgs/personality_4.svg',
        onClick: () => {
          handlePersonalityChange(4);
        }
      },
      {
        active: personality === 5,
        imagePathActive: '/images/svgs/personality_5_active.svg',
        imagePath: '/images/svgs/personality_5.svg',
        onClick: () => {
          handlePersonalityChange(5);
        }
      }
    ];

    let description = ''

    if (personality === 1) {
      description = (
        <Fragment>
          <h3>Evil</h3>
          <p>Your goals are selfish by nature, and you pay little heed to order,
             unless you're using it for your own means.</p>
        </Fragment>
      )
    } else if (personality === 2) {
      description = (
        <Fragment>
          <h3>Dishonorable</h3>
          <p>You strive to achieve your goals in life through nearly any means,
             though you are not inherently evil.</p>
        </Fragment>
      )
    } else if (personality === 3) {
      description = (
        <Fragment>
          <h3>Neutral</h3>
          <p>Your interests rarely stray outside of your own goals,
             and your methods are typically only as extreme as necessary.</p>
        </Fragment>
      )
    } else if (personality === 4) {
      description = (
        <Fragment>
          <h3>Honorable</h3>
          <p>You strive to achieve your goals in life through honest work.</p>
        </Fragment>
      )
    } else if (personality === 5) {
      description = (
        <Fragment>
          <h3>Benevolent</h3>
          <p>You preform good deeds and follow righteous morals
             for the sake of goodness, peace, order, or other benevolent purposes.</p>
        </Fragment>
      )
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
