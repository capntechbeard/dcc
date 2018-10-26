import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'

class ACharacterSheet extends Component {

  constructor(props) {
    super(props)

    this.handleNavigation = this.handleNavigation.bind(this)
    this.handleBackNavigation = this.handleBackNavigation.bind(this)
  }

  handleNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('ACharacterCreateMenu')
  }
  handleBackNavigation() {
    const {navigateToPage} = this.props
    navigateToPage ('AShop')
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Header title="Character Sheet" />
          <Button 
            className="back-button"
            onClick={this.handleBackNavigation}
            text="BACK" />
          <Button 
            className="next-button"
            onClick={this.handleNavigation}
            text="COMPLETE" />
        </Container>
      </Fragment>
        
    );
  }
}

export default ACharacterSheet;
