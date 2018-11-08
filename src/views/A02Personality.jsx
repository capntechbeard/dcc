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
    return (
      <Fragment>
        <Container>
          <Header title="Personality" />

          <SelectBar selectButtons={[
            {
              imagePath: '/images/svgs/circle.svg',
              onClick: () => {
                alert('1');
              }
            },
            {
              imagePath: '/images/svgs/circle.svg',
              onClick: () => {
                alert('2');
              }
            },
            {
              imagePath: '/images/svgs/circle.svg',
              onClick: () => {
                alert('3');
              }
            },
            {
              imagePath: '/images/svgs/circle.svg',
              onClick: () => {
                alert('4');
              }
            },
            {
              imagePath: '/images/svgs/circle.svg',
              onClick: () => {
                alert('5');
              }
            }

          ]} />

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
