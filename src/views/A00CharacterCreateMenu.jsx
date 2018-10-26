import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'

class ACharacterCreateMenu extends Component {

  constructor(props) {
    super(props)

    this.handleNavigation = this.handleNavigation.bind(this)
    this.handleBackNavigation = this.handleBackNavigation.bind(this)
  }

  handleNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('AAbilityScores')
  }
  handleBackNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('Splash')
  }

  render() {
    return (
      <Fragment>
        <Container title="it's anything else he said">
          <Header title="Character Creation" />
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

export default ACharacterCreateMenu;
