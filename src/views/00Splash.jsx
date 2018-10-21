import React, { Component, Fragment } from 'react';
import Button from '../components/Button/Button'
import Container from '../components/Container/Container'
import Header from '../components/Header/Header'

class Splash extends Component {

  constructor(props) {
    super(props)

    this.handleNavigation = this.handleNavigation.bind(this)
  }

  handleNavigation() {
    console.log ('test')
    const {navigateToPage} = this.props
    navigateToPage ('ACharacterCreateMenu')
  }

  render() {
    return (
      <Fragment>
        <Container title="it's anything else he said">
          <Header title="HEADER!" />
          <Button 
            className="next-button"
            onClick={this.handleNavigation}
            text="NEXT" />
        </Container>
      </Fragment>
        
    );
  }
}

export default Splash;
